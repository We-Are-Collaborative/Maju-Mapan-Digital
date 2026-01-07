import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        const { pathname } = req.nextUrl;
        const token = req.nextauth.token;

        // Role verification logic
        // Updated: Allow 'admin' (employee), 'client', and 'candidate' to access /admin
        // Each role will see different content in the sidebar/pages.
        if (pathname.startsWith("/admin")) {
            const allowedRoles = ['admin', 'client'];
            if (token?.role === 'candidate') {
                return NextResponse.redirect(new URL("/profile", req.url));
            }
            if (!token?.role || !allowedRoles.includes(token.role as string)) {
                return NextResponse.redirect(new URL("/login", req.url));
            }
        }

        // Dashboard routes for client/candidate might be deprecated if we move everything to /admin
        // but keeping them protected just in case during transition.
        if (pathname.startsWith("/client") && token?.role !== "client") {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        if (pathname.startsWith("/candidate") && token?.role !== "candidate") {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
        secret: "development-secret-do-not-use-in-prod"
    }
);

export const config = {
    matcher: ["/admin/:path*", "/client/:path*", "/candidate/:path*"],
};
