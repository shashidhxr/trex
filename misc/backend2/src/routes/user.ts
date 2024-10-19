import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
    },
    Variables: {
        userId: string;
    }
}>();

userRouter.get('/profile', async (c) => {
    const userId = c.get('userId');  // Auth0 already verified the user token, userId is safe
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const user = await prisma.user.findUnique({
        where: { id: userId }
    });

    if (!user) {
        c.status(404);
        return c.json({ error: 'User not found' });
    }

    return c.json(user);
});

userRouter.put('/profile', async (c) => {
    const userId = c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    
    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
            name: body.name,
            username: body.email,
        },
    });

    return c.json(updatedUser);
});

