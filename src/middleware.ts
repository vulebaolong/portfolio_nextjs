import { ROUTER } from "@/constants/router.constant";
import { getToken } from "@/libs/auth.lib";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
   const pathname = request.nextUrl.pathname;

   console.log(pathname);

   const arrPathProtect = [
      `${ROUTER.ADMIN.DASHBOARD}`,
      `${ROUTER.ADMIN.ABOUT}`,
      `${ROUTER.ADMIN.MY_PROJECT}`,
      `${ROUTER.ADMIN.CONTRACT}`,
   ];

   if (arrPathProtect.includes(pathname)) {
      console.log("check: " + pathname);

      const user = await getToken();
      console.log("user", user);
      if (!user) {
         return NextResponse.redirect(new URL(`${ROUTER.ADMIN.AUTH.LOGIN}`, request.url));
      }
   }

   if (pathname === ROUTER.ADMIN.AUTH.LOGIN) {
      const user = await getToken();
      if (user) {
         return NextResponse.redirect(new URL(`${ROUTER.ADMIN.DASHBOARD}`, request.url));
      }
   }

   if (pathname === ROUTER.ADMIN.AUTH.REGISTER) {
      const user = await getToken();
      if (user) {
         return NextResponse.redirect(new URL(`${ROUTER.ADMIN.DASHBOARD}`, request.url));
      }
   }
}

export const config = {
   matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      "/((?!api|logo|manifest|_next/static|_next/image|favicon.ico).*)",
   ],
};
