import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LocaleSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );

  //window size
  const [isMobile, setIsMobile] = useState(false)


  useEffect(() => {
    if (window.innerWidth < 920) setIsMobile(true)
  }, [])
  return (
    <span className="text-muted cursor-pointer">
      {otherLocales?.map((locale, index) => {
        const { pathname, asPath } = router;
        // console.log(query);
        return (
          <div className="flex" key={index}>
            {
              isMobile ? (
                <Link href={{ pathname }} as={asPath} locale={locale} >
                  <p className='text-white px-1 py-4 md:py-2 flex items-center text-lg font-lato'>
                    {locale === 'de' ? 'De' : 'En'}
                  </p>
                </Link>
              ) : (
                <>
                  <Link href={{ pathname }} as={asPath} locale={locale} >
                    <p className={`${locale === 'en' ? 'text-white' : 'text-gray-400'} text-white px-1 py-4 md:py-2 flex items-center text-lg font-lato`}>
                      De
                    </p>
                  </Link>
                  <Link href={{ pathname }} as={asPath} locale={locale} >
                    <p className={`${locale === 'de' ? 'text-white' : 'text-gray-400'}  px-1 py-4 md:py-2 flex items-center text-lg font-lato`}>
                      En
                    </p>
                  </Link></>
              )
            }
          </div>
        );
      })}
    </span>
  );
}