import { NuxtAuthHandler } from '#auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { users } from '~/server/db/schema';
import { useDB } from '~/server/db';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';

// Ensure useDB is called within a Nuxt context or similar if it relies on runtimeConfig
// For server-side only usage like this, direct instantiation might be more straightforward if issues arise.

export default NuxtAuthHandler({
  secret: process.env.NUXT_AUTH_SECRET || 'enter-your-secret-here-for-production', // Replace in production!
  adapter: DrizzleAdapter(useDB()), // Pass the db instance
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'test@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any) {
        const db = useDB(); // Ensure db is available

        if (!credentials?.email || !credentials.password) {
          console.error('Credentials missing');
          return null;
        }

        // Check if user exists
        const userArr = await db.select().from(users).where(eq(users.email, credentials.email)).limit(1);
        let user = userArr[0];

        if (!user) {
          // User not found, create a new one (simple signup)
          // In a real app, you'd separate signup and login flows
          console.log('User not found, creating new user:', credentials.email);
          const hashedPassword = await bcrypt.hash(credentials.password, 10);
          const newUserArr = await db.insert(users).values({
            id: crypto.randomUUID(), // Generate a UUID for the new user
            email: credentials.email,
            passwordHash: hashedPassword,
            name: credentials.email.split('@')[0], // Basic name generation
          }).returning();
          user = newUserArr[0];
          console.log('New user created:', user);
        } else {
          // User found, check password
          console.log('User found, checking password for:', user.email);
          if (!user.passwordHash) {
            console.error('User has no password hash set.');
            return null; // Or handle as an error, e.g. user signed up with OAuth
          }
          const isValidPassword = await bcrypt.compare(credentials.password, user.passwordHash);
          if (!isValidPassword) {
            console.log('Invalid password');
            return null;
          }
          console.log('Password valid');
        }

        if (user) {
          // Return the user object expected by NextAuth
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
          };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: 'database', // Use database sessions
  },
  callbacks: {
    // @ts-ignore
    async session({ session, user }) {
      // user is the user object from the authorize callback or adapter
      if (session.user && user) {
        session.user.id = user.id;
      }
      return session;
    },
    // @ts-ignore
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  },
  pages: {
    signIn: '/login', // If you want a custom login page
    // error: '/auth/error', // Error code passed in query string as ?error=
    // signOut: '/auth/signout',
  }
});
