import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { decode, sign, verify } from 'hono/jwt';

export const postRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();

postRouter.use(async (c, next) => {
    const authHeader = c.req.header('Authorization');
    if (!authHeader) {
        c.status(401);
        return c.json({ error: 'no token generated' });
    }
    const token = authHeader
    const payload = await verify(token, c.env.JWT_SECRET);

    if (!payload || typeof payload !== 'object' || !('id' in payload)) {
        throw new Error('Invalid payload');
    }
    // @ts-ignore
    c.set('userId', payload.id);
    await next();
});

postRouter.post('/', async (c) => {
    const userId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const user = await prisma.user.findUnique({
        where: { id: userId },
    });

    if (!user) {
        c.status(404);
        return c.json({ error: 'User not found' });
    }

    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId,
        },
    });

    return c.json({ id: post.id });
});

postRouter.put('/blog', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const post = await prisma.post.update({
        where: {
            id: body.id,
        },
        data: {
            title: body.title,
            content: body.content,
        },
    });

    return c.json({ id: post.id });
});

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
                }
            }
        });
        return c.json({
            blogs: posts
        });
    } catch (e) {
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
            where: {
                id: id,
            },
            select:{
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
        c.status(411);
        return c.json({ error: 'error while fetching post' });
    }
});