import { cookies } from "next/headers";

import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n/dictionaries";

export const LOCALE_COOKIE = "locale";

export async function getLocale() {
    const cookieStore = await cookies();
    const value = cookieStore.get(LOCALE_COOKIE)?.value;

    return LOCALES.includes(value) ? value : DEFAULT_LOCALE;
}
