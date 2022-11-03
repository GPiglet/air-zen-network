//modules
import React, { FC, useState, useEffect, useCallback } from "react"
import { Router, useRouter } from "next/router";
import { Link } from 'react-scroll'
import gsap from "gsap";

import LocaleSwitcher from '../../common/localeSwitcher'


type NaveProps = {
  navItems: Array<any>,
}


const Navbar: FC<NaveProps> = ({ navItems }) => {

  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const [scrolldown, setScrollDown] = useState(false)
  const [section, setSection] = useState<any>('')

  const router = useRouter()

  const [y, setY] = useState(0);
  const [main, setMain] = useState(false);

  useEffect(() => {
    if (router.pathname.split('/')[1] === 'landing') {
      setMain(true)
    } else {
      setMain(false)
    }
  }, [])

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget
      if (y > window.scrollY && window.innerWidth < 920) { // && (window.innerWidth < 920 || main === false)
        setScrollDown(false)
      } else if (y < window.scrollY && window.innerWidth < 920) {  //  && (window.innerWidth < 920 || main === false)
        setScrollDown(true)
      }
      setY(window.scrollY);
    }, [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  // animation
  const animNavButtons = React.useRef<any>([]);

  const routing = (item: any) => {
    if ( item.pageType == 'own' ) {
      router.push({
        pathname: item.href
      })
    }
    else {
      router.push({
        pathname: '/landing',
        query: { section: item.href }
      })
    }

    setNavbarOpen(false)
  }

  useEffect(() => {
    const sectionPos = router.asPath.indexOf('?section=');
    if (sectionPos != -1) router.query.section = router.asPath.substring(sectionPos + 9);
    setSection(router.query.section)
  }, [router])

  return (

    <nav className={`${y > 0 && scrolldown ? 'hidden' : 'block'}  md:top-[40px] lg:top-[62px] md:py-5 pb-10 md:pb-0 bg-gradient-to-b from-black md:from-transparent to-transparent fixed w-full items-center z-[70]`}>
      <div className="container px-4 mx-auto flex flex-wrap relative items-center justify-between">
        <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start md:w-1/4  px-5 pt-5 md:px-0 md:pt-0">
          <div className=" cursor-pointer" onClick={() => router.push('/landing')}>
            <picture>
              <source srcSet="/images/logos/LogoSmall.svg" type="image/webp" />
              <img src="/images/logos/LogoSmall.svg" alt="" />
            </picture>
          </div>
          <div className="flex">
            <div className="md:hidden">
              <LocaleSwitcher />
            </div>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <picture>
                <source srcSet="/images/expand-icon.svg" type="image/webp" />
                <img src="/images/expand-icon.svg" alt="" />
              </picture>
            </button>

          </div>
        </div>
        <div
          className={
            "fixed md:static w-screen md:w-auto h-screen md:h-auto top-0 md:top-auto left-0 md:left-auto md:flex flex-grow items-center backdrop-blur-[6px] backdrop-brightness-50 md:backdrop-filter-none md:bg-opacity-0 md:shadow-none pt-[8px]" +
            (navbarOpen ? " block" : " hidden")
          }
        >
          <div className="flex p-5 justify-end md:hidden" onClick={() => setNavbarOpen(false)}>
            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
            </svg>
          </div>
          <ul className="flex items-start pl-7 md:pl-0 flex-col md:flex-row list-none mr-auto w-full justify-around text-white">
            {

              navItems.map((item, index) => (

                <li ref={el => { if (el && animNavButtons.current.indexOf(el) == -1) animNavButtons.current.push(el) }} className={"mx-3 md:m-0 flex items-center cursor-pointer"} key={index} >
                  {
                    main ? (
                      <Link activeClass="active_scroll" className={section == item.href ? 'active' : ''} smooth spy to={item.href} onClick={() => routing(item)}>
                        <p className="md:hover:text-gray-100 md:text-gray-400 text-white py-4 md:py-2 flex items-center text-lg uppercase font-lato">{item.title}</p>
                      </Link>
                    ) : (
                      <div onClick={() => routing(item)}>
                        <p className={`md:hover:text-gray-100 ${item.href == 'solutions' ? 'text-white' : 'md:text-gray-400'}  py-4 md:py-2 flex items-center text-lg uppercase font-lato`}>{item.title}</p>
                      </div>
                    )
                  }
                </li>
              ))
            }
            <li className={"flex items-center cursor-pointer"} >
            </li>

          </ul>
          <div className="hidden md:block">
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar
