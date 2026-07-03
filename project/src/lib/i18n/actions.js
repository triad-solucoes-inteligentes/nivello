"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n/dictionaries";
import { LOCALE_COOKIE } from "@/lib/i18n/locale";

export async function setLocale(formData) {
    const requested = formData.get("locale");
    const locale = LOCALES.includes(requested) ? requested : DEFAULT_LOCALE;

    const cookieStore = await cookies();
    cookieStore.set(LOCALE_COOKIE, locale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
    });

    revalidatePath("/", "layout");
}
