import Google from "next-auth/providers/google";

export const publicRoutes = ["/", "/login"];

export const authConfig = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_ID ?? process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET ?? process.env.AUTH_GOOGLE_SECRET,
        }),
    ],
    pages: {
        signIn: "/login",
    },
    trustHost: true,
    callbacks: {
        authorized({ auth, request }) {
            const isLoggedIn = !!auth?.user;
            const { nextUrl } = request;
            const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

            if (isLoggedIn && nextUrl.pathname === "/login") {
                return Response.redirect(new URL("/", nextUrl));
            }

            return isPublicRoute || isLoggedIn;
        },
    },
};
