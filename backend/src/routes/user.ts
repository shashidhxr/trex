import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>()

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body = await c.req.json()
    
    try {
        const user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.username,
            }
        })
        const token = await sign({
            id: user.id,
        }, c.env.JWT_SECRET)
    } catch(e) {
        c.status(411)
        console.log(e)
        return c.text("Wrong username and password")
    }
})