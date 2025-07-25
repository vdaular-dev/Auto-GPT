import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { getCookieSettings } from "../helpers";

type Cookies = { name: string; value: string; options?: CookieOptions }[];

export async function getServerSupabase() {
  // Need require here, so Next.js doesn't complain about importing this on client side
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { cookies } = require("next/headers");
  const cookieStore = await cookies();

  try {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet: Cookies) {
            try {
              cookiesToSet.forEach(({ name, value, options }) => {
                cookieStore.set(name, value, {
                  ...options,
                  ...getCookieSettings(),
                });
              });
            } catch {
              // The `setAll` method was called from a Server Component.
              // This can be ignored if you have middleware refreshing
              // user sessions.
            }
          },
        },
      },
    );

    return supabase;
  } catch (error) {
    throw error;
  }
}
