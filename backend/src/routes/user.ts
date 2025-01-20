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
    }).$extends(withAccelerate());

    const body = await c.req.json();

    try {
        // Check if the user already exists by email or username
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: body.email },
                    { username: body.username },
                ],
            },
        });

        if (existingUser) {
            return c.json({
                message: "User already exists",
            });
        }

        // If the user does not exist, create a new user
        const user = await prisma.user.create({
            data: {
                id: body.id,
                name: body.name,
                username: body.username,
                email: body.email,
                picture: body.picture,
            },
        });

        const token = await sign(
            { id: user.id },
            c.env.JWT_SECRET,
            // { expiresIn: "1h" } // Optional expiration time
        );

        return c.json({
            jwt: token,
            message: "User signed up successfully",
        });
    } catch (e) {
        c.status(400);
        console.error("Signup error:", e);
        return c.text("Signup failed. Please try again.");
    }
});

userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    try {
        const user = await prisma.user.findFirst({
            where: {
                username: body.username,
                email: body.email, // Match email during signin
            },
        });

        if (!user) {
            c.status(403);
            return c.json({
                error: "User not found. Please check your credentials.",
            });
        }

        const token = await sign(
            { id: user.id },
            c.env.JWT_SECRET,
            // { expiresIn: "1h" } // Optional expiration time
        );

        return c.json({
            jwt: token,
            message: "Signed in successfully",
        });
    } catch (e) {
        c.status(500);
        console.error("Signin error:", e);
        return c.text("Signin failed. Please try again.");
    }
});

userRouter.get('/all', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                username: true,
                name: true,
                email: true, // Include email in the response
            },
        });

        return c.json({ users });
    } catch (e) {
        console.error("Error retrieving users:", e);
        c.status(500);
        return c.text("Could not retrieve users");
    }
});
