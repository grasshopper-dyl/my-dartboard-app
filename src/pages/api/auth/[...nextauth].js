import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const user = await prisma.users.findUnique({
          where: { Email: credentials.username },
        });

        if (!user) {
          throw new Error('No user found');
        }

        // Add your custom password validation logic here (e.g., bcrypt.compare)
        if (credentials.password !== user.Password) {
          throw new Error('Invalid password');
        }

        return {
          id: user.UserId,
          email: user.Email,
          username: user.UserName,
        };
      },
    }),
  ],

  adapter: PrismaAdapter(prisma),

  // Configure other NextAuth options (e.g., callbacks, session, etc.)
});
