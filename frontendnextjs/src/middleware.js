import { NextResponse } from "next/server";

export function middleware(req) {
    // const { cookies } = req;
    // const token = cookies.get('token');
    // const isAccountPage = req.nextUrl.pathname.startsWith('/account');
    // const isSigninPage = req.nextUrl.pathname === '/signin' || req.nextUrl.pathname === '/signup';

    // // If the user is trying to access an account page without a token, redirect to sign-in
    // if (!token && isAccountPage) {
    //     return NextResponse.redirect(new URL('/signin', req.url));
    // }

    // // If the user is signed in and trying to access the sign-in or sign-up page, redirect to home
    // if (token && isSigninPage) {
    //     return NextResponse.redirect(new URL('/', req.url));
    // }

    return NextResponse.next();
}

// Optional: Define the routes this middleware should apply to
export const config = {
    matcher: ['/account/:path*', '/signin', '/signup'], // Match account-related routes and sign-in/sign-up pages
};