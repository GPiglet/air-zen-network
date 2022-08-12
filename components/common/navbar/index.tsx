//modules
import React, { FC, useState } from "react"
import { useRouter } from "next/router";
import { Link } from 'react-scroll'
import gsap from "gsap";

import LocaleSwitcher from '../../common/localeSwitcher'


type NaveProps = {
  navItems: Array<any>
}


const Navbar: FC<NaveProps> = ({ navItems }) => {

  const [navbarOpen, setNavbarOpen] = React.useState(false)

  const router = useRouter()

  // animation
  const animNavButtons = React.useRef<any>([]);


    React.useEffect(() => {
      gsap.set(animNavButtons.current, {opacity: 0, y: 50});
      gsap.to(animNavButtons.current, {
          opacity: 1,
          scrollTrigger: {
              scrub: true,
              start: 2500,
              end: 4900,
          }
      });
  
      gsap.to(animNavButtons.current.reverse(), {
          y: 0,
          stagger: 0.05,
          scrollTrigger: {
              scrub: true,
              start: 2500,
              end: 4900,
          }
      });
  
  
      return ()=>gsap.killTweensOf(animNavButtons);
    }, [])


  return (
    <nav className="top-[10px] md:top-[40px] lg:top-[62px] fixed z-50 w-full items-center navbar-expand-lg bg-transparent z-60">
      {/* <div className="block md:hidden w-full">
          <div
            className={
              "block md:hidden md:flex flex-grow items-center bg-gray-900 md:bg-opacity-0 md:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
          >
          <div className=" flex justify-between px-5 pt-5">
            <Link to="/">
              <Image src="/images/logos/LogoSmall.svg" alt="" />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Image src="/images/expand-icon.svg" alt="" />
            </button>
          </div>
            <ul className="flex flex-col md:flex-row list-none mr-auto w-full justify-around text-white">
              {
                navItems.map((item, index) => (
                  <li className={"flex items-center cursor-pointer"} key={index} >
                    <Link activeClass="active" smooth spy to={item.href}>
                      <p className="hover:text-gray-100 text-gray-400 px-3 py-4 md:py-2 flex items-center text-lg uppercase font-lato">{item.title}</p>
                    </Link>
                  </li>
                ))
              }

            </ul>
          </div>

        </div> */}
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start md:w-1/4  px-5 pt-5 md:px-0 md:pt-0">
          <div className=" cursor-pointer" onClick={() => router.push('/')}>
          <picture>
        <source srcSet="/images/logos/LogoSmall.svg" type="image/webp" />
            <img src="/images/logos/LogoSmall.svg" alt="" />
            </picture>
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
        <div
          className={
            "md:flex flex-grow items-center bg-gray-900 md:bg-opacity-0 md:shadow-none pt-[8px]" +
            (navbarOpen ? " block" : " hidden")
          }
        >
          <ul className="flex flex-col md:flex-row list-none mr-auto w-full justify-around text-white">
            {
              navItems.map((item, index) => (
                <li ref={el=>animNavButtons.current.push(el)} className={"flex items-center cursor-pointer"} key={index} >
                  <Link activeClass="active" smooth spy to={item.href}>
                    <p className="hover:text-gray-100 text-gray-400 px-3 py-4 md:py-2 flex items-center text-lg uppercase font-lato">{item.title}</p>
                  </Link>
                </li>
              ))
            }
                {/* <li className={"flex items-center cursor-pointer"} >
                  <LocaleSwitcher />
                </li> */}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
