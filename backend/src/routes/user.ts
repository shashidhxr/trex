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
                email: body.username,
                password: body.password,
            }
        })
        const token = await sign({
            id: user.id,
        }, c.env.JWT_SECRET)

        localStorage.setItem('token', token);
        
        return c.json({
            jwt: token
        })
    } catch(e) {
        c.status(411)
        return c.text("Wrong username and password")
    }
})

userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body = await c.req.json()

    try{
        const user = await prisma.user.findFirst({
            where: {
                email: body.email,
                password: body.password,
            }
        })
    
        if(!user){
            c.status(403)
            return c.json({
                error: "user not found"
            })
        }
    
        const jwt = await sign({
            id: user.id
        }, c.env.JWT_SECRET)
            
        return c.json({ jwt,
            message: "Signed in succesfully"
         })
    } catch(e) {
        c.status(411)
        return c.text("invalid")
    }
})
