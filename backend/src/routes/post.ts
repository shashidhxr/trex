import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'


export const postRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string,
    }
}>()

postRouter.use(async (c, next) => {
    // get the header
    const authHeader = c.req.header('Authorization')         // ** "" type error of authHeader
    if(!authHeader){
        c.status(401)
        return c.json({
            error: "unauthorized",
        })
    }
    // verify the header
    const payload = await verify(authHeader, c.env.JWT_SECRET)
    if(!payload){            // ** payload.id
        c.status(401)
        return c.json({
            error: "unauthorized",
        })
    }
    c.set("userId", payload.id)
    await next()
})

postRouter.post( async (c) => {
    const userId = c.get("userId")
    console.log(userId)
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    // console.log(body) 
    const post = prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            published: body.published,
            authorId: userId
        }
    })
        // console.log((await post).id)
    return c.json({
        id: post.id        // ** post.id
    })
})

postRouter.put('/blog', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    
    const post = prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content,
        }
    })
    return c.json({
        id: (await post).id         // ** post.id
    })
})

postRouter.get('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    try {
        const post = prisma.post.findFirst({
            where: {
                id: body.id
            }
        })
        return c.json({
            post
        })
    } catch(e) {
        c.status(411)
        return c.json({
            error: "error while fetching post"
        })
    }
})


// pagination
postRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    try {
        const posts = prisma.post.findMany()

        return c.json({
            posts
        })
    } catch(e) {
        c.status(411)
        return c.json({
            error: "error while fetching posts"
        })
    }
})

// app.get('/blog:id', (c) => {

// })
