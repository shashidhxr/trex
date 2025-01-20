import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
// @ts-ignore
// import { v5 as uuidv5 } from 'uuid';

// interface Auth0User {
//     sub: string;
//     email: string;
//     name?: string;
// }

// const AUTH0_NAMESPACE = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';

// function convertAuth0SubToUUID(sub: string): string {
//     return uuidv5(sub, AUTH0_NAMESPACE);
// }

export const postRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
    }
}>();

postRouter.post('/', async (c) => {
    // const userInfo = await ensureUserExists(c);
    // if (!userInfo.id) return c.json({ error: 'Unauthorized' });

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    try {
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                // authorId: userInfo.id,
                authorId: body.authorId,
            },
        });

        return c.json({ id: post.id });
    } catch (e) {
        console.error('Error creating post:', e);
        c.status(500);
        return c.json({ error: 'Error creating post' });
    }
});

// postRouter.put('/blog', async (c) => {
//     const userInfo = await ensureUserExists(c);
//     if (!userInfo.id) return c.json({ error: 'Unauthorized' });

//     const prisma = new PrismaClient({
//         datasourceUrl: c.env.DATABASE_URL,
//     }).$extends(withAccelerate());

//     const body = await c.req.json();

//     try {
//         const existingPost = await prisma.post.findUnique({
//             where: { id: body.id },
//             select: { authorId: true }
//         });

//         if (!existingPost || existingPost.authorId !== userInfo.id) {
//             c.status(403);
//             return c.json({ error: 'Unauthorized to edit this post' });
//         }

//         const post = await prisma.post.update({
//             where: { id: body.id },
//             data: {
//                 title: body.title,
//                 content: body.content,
//             },
//         });

//         return c.json({ id: post.id });
//     } catch (e) {
//         console.error('Error updating post:', e);
//         c.status(500);
//         return c.json({ error: 'Error updating post' });
//     }
// });

postRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const posts = await prisma.post.findMany({
            select: {
                title: true,
                content: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                },
                publishedDate: true,
            }
        });
        return c.json({
            blogs: posts
        });
    } catch (e) {
        console.error('Error fetching posts:', e);
        c.status(411);
        return c.json({ error: 'error while fetching posts' });
    }
});

postRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const id = c.req.param('id');
    try {
        const post = await prisma.post.findFirst({
            where: { id: id },
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });

        if (!post) {
            c.status(404);
            return c.json({ error: 'Post not found' });
        }

        return c.json({
            blog: post
        });
    } catch (e) {
        console.error('Error fetching post:', e);
        c.status(411);
        return c.json({ error: 'error while fetching post' });
    }
});

export default postRouter;