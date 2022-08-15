import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );

  return (
    <span className="text-muted cursor-pointer">
      {otherLocales?.map((locale, index) => {
        const { pathname, query, asPath } = router;
        return (
          <Link href={{ pathname, query }} as={asPath} locale={locale} key={index}>
            <p className="hover:text-gray-100 text-white px-3 py-4 md:py-2 flex items-center text-lg font-lato">
              {locale === "en" ? "En/De" : locale === "de" ? "De/En" : null}
            </p>
          </Link>
        );
      })}
    </span>
  );
}