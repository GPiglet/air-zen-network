//modules
import React, { FC, useState, useEffect } from "react"
import { useRouter } from "next/router";
import { Link } from 'react-scroll'
import gsap from "gsap";

import LocaleSwitcher from '../../common/localeSwitcher'


type NaveProps = {
  navItems: Array<any>
}


const Navbar: FC<NaveProps> = ({ navItems }) => {

  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const [position, setPosition] = useState(0)

  const router = useRouter()

  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(position);
    setPosition(position)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // animation
  const animNavButtons = React.useRef<any>([]);


  // useEffect(() => {
  //   if (window.innerWidth > 920) {
  //     gsap.set(animNavButtons.current, { opacity: 0, y: 50 });
  //     gsap.to(animNavButtons.current, {
  //       opacity: 1,
  //       scrollTrigger: {
  //         scrub: true,
  //         start: 2500,
  //         end: 4900,
  //       }
  //     });

  //     gsap.to(animNavButtons.current.reverse(), {
  //       y: 0,
  //       stagger: 0.05,
  //       scrollTrigger: {
  //         scrub: true,
  //         start: 2500,
  //         end: 4900,
  //       }
  //     });


  //     return () => gsap.killTweensOf(animNavButtons);
  //   }
  // }, [])

  return (
    <nav className={`${position === 0 ? 'top-[10px] md:top-[40px] lg:top-[62px]' : 'md:py-5 backdrop-blur'} duration-500 fixed z-50 w-full items-center navbar-expand-lg bg-transparent z-60`}>
      <div className="container px-4 mx-auto flex flex-wrap relative items-center justify-between">
        <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start md:w-1/4  px-5 pt-5 md:px-0 md:pt-0">
          <div className=" cursor-pointer" onClick={() => router.push('/')}>
            <picture>
              <source srcSet="/images/logos/LogoSmall.svg" type="image/webp" />
              <img src="/images/logos/LogoSmall.svg" alt="" />
            </picture>
          </div>
          <div className="flex">

            <div className="md:hidden">
              <LocaleSwitcher />
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
                <li ref={el => animNavButtons.current.push(el)} className={"mx-3 md:m-0 flex items-center cursor-pointer"} key={index} >
                  <Link activeClass="active" smooth spy to={item.href} onClick={() => setNavbarOpen(false)}>
                    <p className="hover:text-gray-100 text-gray-400  py-4 md:py-2 flex items-center text-lg uppercase font-lato">{item.title}</p>
                  </Link>
                </li>
              ))
            }
            <li className={"flex items-center cursor-pointer"} >
            </li>

          </ul>
          <div className="hidden md:block">
            <LocaleSwitcher />
          </div>
          <div className="hidden md:block">
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
