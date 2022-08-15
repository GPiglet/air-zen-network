//modules
import React, { FC, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

//custom Components
import Mainlayout from '../../layout/main'
import Edu from '../../components/edu'


const Home: NextPage = () => {


	const navItems:Array<any> = [
		{
			id: 1,
			title: 'Lösungen',
			href: 'solutions'
		},
		{
			id: 2,
			title: 'Über uns',
			href: 'aboutus'
		},
		{
			id: 3,
			title: 'REFERENZEN',
			href: 'credentials'
		},
		{
			id: 4,
			title: 'Kontakt',
			href: 'cantact'
		},
	]

	
	const scrolling = {
		enabled: true,
		events: "scroll,wheel,touchmove,pointermove".split(","),
		prevent: (e:any) => e.preventDefault(),
		disable() {
		if (scrolling.enabled) {
			scrolling.enabled = false;
			window.addEventListener("scroll", gsap.ticker.tick, {passive: true});
			scrolling.events.forEach((e, i) => window.addEventListener(e, scrolling.prevent, {passive: false}));
		}
		},
		enable() {
		if (!scrolling.enabled) {
			scrolling.enabled = true;
			window.removeEventListener("scroll", gsap.ticker.tick);
			scrolling.events.forEach((e, i) => window.removeEventListener(e, scrolling.prevent));
		}
		}
	};


	function goToSection(section:any, anim?:any) {
		if (scrolling.enabled) { // skip if a scroll tween is in progress
			scrolling.disable();
			gsap.to(window, {
				scrollTo: {y: section, autoKill: false},
				onComplete: scrolling.enable,
				duration: 1.5
			});
		}
	}

	const [sWidth, setSWidth] = React.useState(0)
  
	React.useEffect(() => {
	  function handleResize() {
		// console.log(sWidth)
		setSWidth(window.innerWidth)
	  }
	  
	  window.addEventListener("resize", handleResize)
	  
	  handleResize()
	  return () => { 
		window.removeEventListener("resize", handleResize)
	  }
	}, [sWidth])

	const sections = ['section1', 'section2', 'section3', 'section4', 'section5']
	React.useEffect(() => {
			const tl1 = gsap.timeline({
			    scrollTrigger: {
					trigger: '.section1',
					// start: "top bottom-=1",
					end: "bottom-=300 top-=299",
					onEnter: () => goToSection('.section1'),
					onEnterBack: () => goToSection('.section1'),
					scrub:true,
			    },
			});
			const tl2 = gsap.timeline({
			    scrollTrigger: {
					trigger: '.section2',
					end: "bottom-=300 top-=299",
					onEnter: () => goToSection('.section2'),
					onEnterBack: () => goToSection('.section2'),
					scrub:1,

			    }
			});
			tl2
			.to(".group1 .g1-b", { duration:1, scale: 1.8, opacity: 0, transformOrigin: "50% 50%",
			})
			.to(".group1 .g1-s", { scale: 0.5, opacity: 0, transformOrigin: "50% 50%",	
			}, 0)
			.to(".group1 .g2", { scale: 1.3, opacity: 0, transformOrigin: "50% 50%", translateY:-1000,
			}, 0)
			.fromTo(".group2 .g1-s", { scale: 1.8, opacity: 0, transformOrigin: "50% 50%", 
				}, { scale: 1, opacity: 0.4, transformOrigin: "50% 50%", 
			}, 0)
			.fromTo(".group2 .g1-b", { scale: 0.5, opacity: 0, transformOrigin: "50% 50%", 
				}, { scale: 1, opacity: 0.4, transformOrigin: "50% 50%", 
			}, 0)
			.fromTo(".group2 .img", {opacity: 0.6, transformOrigin: "50% 50%", translateY:700 
				}, { opacity: 1, transformOrigin: "50% 50%", translateY:0
			}, 0)
			.fromTo(".group3 .img", {opacity: 0, transformOrigin: "50% 50%", translateY:700 
				}, { opacity: 0.5, transformOrigin: "50% 50%", translateY:550
			}, 0)

			const tl3 = gsap.timeline({
			    scrollTrigger: {
					trigger: '.section3',
					end: "bottom-=300 top-=299",
					onEnter: () => goToSection('.section3'),
					onEnterBack: () => goToSection('.section3'),
					scrub:true,
			    }
			});
			tl3.to('.group2 .g1-s', { duration:1, scale: 1.8, opacity: 0, transformOrigin: "50% 50%", 
			}, 0)
			.to('.group2 .g1-b', { scale: 0.5, opacity: 0, transformOrigin: "50% 50%", 
			}, 0)
			.to('.group2 .img', { opacity: 1, transformOrigin: "50% 50%", translateY:-1000
			}, 0)
			.fromTo(".group3 .g1-s", { scale: 1.5, opacity: 0, transformOrigin: "50% 50%", 
				}, { scale: 1, opacity: 0.6, transformOrigin: "50% 50%", 
			}, 0)
			.fromTo(".group3 .g1-b", { scale: 0.5, opacity: 0, transformOrigin: "50% 50%", 
				}, { scale: 1, opacity: 0.5, transformOrigin: "50% 50%", 
			}, 0)
			.to('.group3 .img', { opacity: 1, transformOrigin: "50% 50%", translateY:0
			}, 0)
			const tl4 = gsap.timeline({
			    scrollTrigger: {	
					trigger: '.section4',
					end: "bottom-=300 top-=299",
					onEnter: () => goToSection('.section4'),
					onEnterBack: () => goToSection('.section4'),
					scrub:true,
			    }
			});
			tl4.to('.group3 .img', { duration:1, opacity: 0, transformOrigin: "50% 50%", translateY:-1500 }, 0)
			.to('.group3 .g1-b', { scale: 0.5, opacity: 0, transformOrigin: "50% 50%"}, 0)
			.to('.group3 .g1-s', { scale: 1.5, opacity: 0, transformOrigin: "50% 50%" }, 0)
			.fromTo(".group4 .g1-s", { scale: 1.5, opacity: 0, transformOrigin: "50% 50%", 
				}, { scale: 1, opacity: 0.5, transformOrigin: "50% 50%", 
			}, 0)
			.fromTo(".group4 .g1-b", { scale: 0.3, opacity: 0, transformOrigin: "50% 50%", 
				}, { scale: 1, opacity: 0.5, transformOrigin: "50% 50%", 
			}, 0)
			.fromTo('.group4 .img', {transformOrigin: "50% 50%", translateY:1000
			}, {transformOrigin: "50% 50%", translateY:0}, 0)
			const tl5 = gsap.timeline({
			    scrollTrigger: {	
					trigger: '.section5',
					end: "bottom-=300 top-=299",
					onEnter: () => goToSection('.section5'),
					onEnterBack: () => goToSection('.section5'),
					scrub:true,
			    }
			});
			tl5.to('.group4 .img', { duration:1, opacity: 0, transformOrigin: "50% 50%", translateY:-1500 }, 0)
			.to('.group4 .g1-b', { scale: 0.5, opacity: 0, transformOrigin: "50% 50%"}, 0)
			.to('.group4 .g1-s', { scale: 1.5, opacity: 0, transformOrigin: "50% 50%" }, 0)
			.fromTo(".group5 .g1-s", { scale: 1.5, opacity: 0, transformOrigin: "50% 50%", 
				}, { scale: 1, opacity: 0.5, transformOrigin: "50% 50%", 
			}, 0)
			.fromTo(".group5 .g1-b", { scale: 0.3, opacity: 0, transformOrigin: "50% 50%", 
				}, { scale: 1, opacity: 0.5, transformOrigin: "50% 50%", 
			}, 0)
			.fromTo('.group5 .img', {transformOrigin: "50% 50%", translateY:1500
			}, {transformOrigin: "50% 50%", translateY:0}, 0)

			const tl6 = gsap.timeline({
			    scrollTrigger: {	
					trigger: '.footer',
					end: "bottom-=300 top-=299",
					onEnter: () => goToSection('.footer'),
					onEnterBack: () => goToSection('.footer'),
					scrub:true,
			    }
			});
			tl6
			.to('.group5 .img', { duration:1, opacity: 0, transformOrigin: "50% 50%", translateY:-1500 }, 0)
			.to('.group5 .g1-b', { scale: 0.5, opacity: 0, transformOrigin: "50% 50%"}, 0)
			.to('.group5 .g1-s', { scale: 1.5, opacity: 0, transformOrigin: "50% 50%" }, 0)
	}, [])

	return (
		<div className='back-left-top-gradient-primary overflow-x-clip'>
			
            <svg className="trigger fixed top-0" width="100%" height="100%" viewBox="0 0 1701 1691" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g className='group1' transform={`translate(${ sWidth>=920 && "500" || "0"}, 0) scale(1.7)`}>
					<path className="g1-b" opacity="0.4" d="M747.782 581.528C819.969 558.451 860.114 482.27 837.45 411.372C814.785 340.474 737.893 301.708 665.706 324.784C593.519 347.861 553.373 424.042 576.038 494.94C598.702 565.838 675.595 604.605 747.782 581.528Z" fill="url(#paint0_linear_0_1)"/>
					<path className="g1-b" opacity="0.6" d="M529.836 718.645C689.229 667.69 777.873 499.477 727.828 342.93C677.784 186.383 508 100.783 348.607 151.738C189.214 202.693 100.569 370.906 150.614 527.453C200.659 684 370.442 769.6 529.836 718.645Z" fill="url(#paint1_radial_0_1)"/>
					<path className="g1-s" opacity="0.6" d="M772.189 328.102C830.003 508.953 727.599 703.297 543.439 762.169C359.279 821.042 163.13 722.139 105.315 541.288C47.5009 360.437 149.905 166.094 334.065 107.221C518.225 48.3491 714.375 147.252 772.189 328.102Z" stroke="url(#paint2_linear_0_1)"/>
					<path className="g1-s" opacity="0.7" d="M242.271 683.229C293.59 666.824 322.13 612.665 306.017 562.262C289.905 511.859 235.24 484.299 183.921 500.705C132.602 517.111 104.062 571.27 120.175 621.672C136.287 672.075 190.952 699.635 242.271 683.229Z" fill="url(#paint3_linear_0_1)"/>
					<path className="g1-b" opacity="0.7" d="M295.42 565.648C309.691 610.291 284.415 658.275 238.94 672.812C193.465 687.35 145.041 662.926 130.77 618.284C116.499 573.641 141.775 525.657 187.25 511.12C232.725 496.582 281.149 521.006 295.42 565.648Z" stroke="url(#paint4_linear_0_1)"/>
					<path className="g2" opacity="0.4" d="M624.774 486.429C502.5 463.549 385.161 542.353 362.689 662.443C340.218 782.533 421.123 898.434 543.397 921.314C665.671 944.194 783.01 865.39 805.481 745.3C827.953 625.209 747.047 509.309 624.774 486.429Z" fill="url(#paint5_linear_0_1)"/>
					<image className="g1-s" href="/images/education1.png" width="740" height="1000" clipPath="url(#myCircle1)" x="4.5%" y="-4%" fillOpacity='1' />
					<path className="g2" opacity="0.4" d="M422.931 610.715C370.622 701.317 400.353 816.411 489.337 867.786C578.32 919.161 692.86 887.361 745.169 796.76C797.478 706.158 767.747 591.063 678.764 539.689C589.78 488.314 475.24 520.114 422.931 610.715Z" fill="url(#paint6_linear_0_1)"/>
					<image className="g2" href="/images/education2.png" width="480" height="780" clipPath="url(#myCircle2)" x="18%" y="18%" fillOpacity='1' />
					<defs>
					<linearGradient id="paint0_linear_0_1" x1="665.706" y1="324.784" x2="747.782" y2="581.528" gradientUnits="userSpaceOnUse">
					<stop stopColor="#8ABE9C"/>
					<stop offset="1" stopColor="#8ABE9C" stopOpacity="0"/>
					</linearGradient>
					<radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(390.049 243.439) rotate(72.1213) scale(528.722 538.335)">
					<stop stopColor="#2294C3"/>
					<stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
					</radialGradient>
					<linearGradient id="paint2_linear_0_1" x1="333.913" y1="106.745" x2="543.591" y2="762.646" gradientUnits="userSpaceOnUse">
					<stop stopColor="#669AB4"/>
					<stop offset="1" stopColor="#669AB4" stopOpacity="0"/>
					</linearGradient>
					<linearGradient id="paint3_linear_0_1" x1="183.921" y1="500.705" x2="242.271" y2="683.229" gradientUnits="userSpaceOnUse">
					<stop stopColor="#8ABE9C"/>
					<stop offset="1" stopColor="#8ABE9C" stopOpacity="0"/>
					</linearGradient>
					<linearGradient id="paint4_linear_0_1" x1="187.098" y1="510.643" x2="239.092" y2="673.289" gradientUnits="userSpaceOnUse">
					<stop stopColor="#7BB690"/>
					<stop offset="1" stopColor="#7BB690" stopOpacity="0"/>
					</linearGradient>
					<linearGradient id="paint5_linear_0_1" x1="543.397" y1="921.314" x2="624.774" y2="486.429" gradientUnits="userSpaceOnUse">
					<stop stopColor="#8ABE9C"/>
					<stop offset="1" stopColor="#8ABE9C" stopOpacity="0"/>
					</linearGradient>
					<linearGradient id="paint6_linear_0_1" x1="745.169" y1="796.76" x2="422.931" y2="610.715" gradientUnits="userSpaceOnUse">
					<stop stopColor="#8ABE9C"/>
					<stop offset="1" stopColor="#8ABE9C" stopOpacity="0"/>
					</linearGradient>
					<clipPath id="myCircle1">
						<circle cx="440" cy="440"  r="240"  fill="#FFFFFF" />
					</clipPath>
					<clipPath id="myCircle2">
						<circle cx="580" cy="700"  r="152"  fill="#FFFFFF" />
					</clipPath>
					</defs>
				</g>
				<g className='group2' transform={`translate(${ sWidth>=920 && "-650" || "150"}, 0) scale(1.7)`} opacity='1'>
					<path className="g1-s" opacity="0" d="M497.478 697.949C666.249 643.996 760.109 465.886 707.12 300.129C654.13 134.372 474.358 43.7363 305.587 97.689C136.816 151.642 42.9562 329.752 95.9454 495.509C148.935 661.266 328.707 751.902 497.478 697.949Z" fill="url(#paint0_radial_1376_7045)"/>
					<path className="g1-b" opacity="0.5" d="M474.04 622.595C600.747 582.09 671.214 448.371 631.432 323.926C591.649 199.481 456.682 131.435 329.975 171.941C203.267 212.447 132.801 346.166 172.583 470.61C212.366 595.055 347.332 663.101 474.04 622.595Z" fill="url(#paint1_radial_1376_7045)"/>
					<path className='g1-s' d="M586.13 339.163C618.068 439.068 561.499 546.433 459.757 578.958C358.015 611.483 249.656 556.841 217.719 456.937C185.781 357.032 242.35 249.667 344.092 217.142C445.834 184.617 554.193 239.259 586.13 339.163Z" stroke="url(#paint2_linear_1376_7045)"/>
					<image className='img w-[18%]' href="/images/phone-home.png" x="14.5%" y="10%" fillOpacity='0.5' />
					<defs>
					<radialGradient id="paint0_radial_1376_7045" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(332.077 121.279) rotate(72.664) scale(635.151 646.7)">
					<stop stopColor="#2294C3"/>
					<stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
					</radialGradient>
					<radialGradient id="paint1_radial_1376_7045" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(349.863 189.652) rotate(72.664) scale(476.85 485.52)">
					<stop stopColor="#2294C3"/>
					<stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
					</radialGradient>
					<linearGradient id="paint2_linear_1376_7045" x1="343.94" y1="216.666" x2="459.909" y2="579.434" gradientUnits="userSpaceOnUse">
					<stop stopColor="#159BDE"/>
					<stop offset="1" stopColor="#159BDE" stopOpacity="0"/>
					</linearGradient>
					</defs>
				</g>
				<g className='group3' transform={`translate(${ sWidth>=920 && "-400" || "-1000"}, -1000) scale(2.2)`} opacity='1' >
					<svg className="absolute mx-auto 
					right-[-67%] sm:right-[-63%] md:right-[-85%] lg:right-[-110%] xl:right-[-85%]
					top-[88%] xs:top-[73%] sm:top-[23%] md:top-[-33%] lg:top-[-69%] xl:top-[-70%]
					w-[230%] sm:w-[220%] md:w-[200%] lg:w-[230%] xl:w-[200%]" viewBox="-600 -350 2000 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className='g1-b' opacity="0.3" d="M303.174 715.686C469.992 755.232 637.379 652.461 677.043 486.141C716.707 319.822 613.628 152.935 446.809 113.39C279.991 73.8448 112.604 176.616 72.94 342.935C33.2762 509.255 136.355 676.141 303.174 715.686Z" fill="url(#paint0_radial_1226_5560)"/>
						<image className='img' href="/images/education3.png" width="1000" height="370" clipPath="url(#myCircle)" x="-6.5%" y="15.2%" fillOpacity='0.5'/>
						<path className='g1-s' opacity="0.5" d="M441.331 620.158C555.295 583.835 618.148 462.279 581.716 348.655C545.283 235.031 423.363 172.367 309.398 208.69C195.433 245.013 132.581 366.569 169.013 480.193C205.445 593.817 327.366 656.481 441.331 620.158Z" fill="url(#paint1_radial_1226_5560)"/>
						<path className='g1-s' opacity="0.6" d="M689.967 314.529C745.553 487.891 649.656 673.358 475.771 728.779C301.886 784.201 115.864 688.588 60.278 515.226C4.69146 341.864 100.589 156.397 274.473 100.976C448.358 45.5548 634.38 141.167 689.967 314.529Z" stroke="url(#paint3_linear_1226_5560)"/>
						<path className='g1-b' d="M536.827 363.337C565.377 452.376 516.124 547.633 426.815 576.098C337.507 604.562 241.966 555.455 213.416 466.416C184.867 377.377 234.12 282.121 323.428 253.656C412.737 225.191 508.278 274.299 536.827 363.337Z" stroke="url(#paint2_linear_1226_5560)"/>
						<foreignObject  className="img font-lato-light  italic text-lg text-white hidden md:block" x="15%" y="9.5%" width="250px" height="100px">
							<p 
							>Dieses Feature ermöglicht eine besondere Funktion: XYZ</p>
						</foreignObject>
						<image href="/images/sparkle.svg" className="img w-[49px] h-[47px] hidden md:block"  x="13%" y="9%" cx="511.828" cy="696.377" />
						<foreignObject  className="img font-lato-light  italic text-lg text-white hidden md:block" x="15%" y="37.5%" width="250px" height="100px">
							<p 
							>Dieses Feature ermöglicht eine besondere Funktion: XYZ</p>
						</foreignObject>
						<image href="/images/sparkle.svg" className="img w-[49px] h-[47px] hidden md:block"  x="13%" y="37%" cx="511.828" cy="696.377" />
						<defs>
						<radialGradient id="paint0_radial_1226_5560" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(456.842 146.603) rotate(103.799) scale(624.071 625.731)">
						<stop stopColor="#2294C3"/>
						<stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
						</radialGradient>
						<radialGradient id="paint1_radial_1226_5560" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(327.4 224.928) rotate(72.6081) scale(435.501 436.575)">
						<stop stopColor="#2294C3"/>
						<stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
						</radialGradient>
						<linearGradient id="paint2_linear_1226_5560" x1="323.276" y1="253.18" x2="426.406" y2="576.753" gradientUnits="userSpaceOnUse">
						<stop stopColor="#159BDE"/>
						<stop offset="1" stopColor="#159BDE" stopOpacity="0"/>
						</linearGradient>
						<linearGradient id="paint3_linear_1226_5560" x1="274.321" y1="100.5" x2="474.831" y2="729.604" gradientUnits="userSpaceOnUse">
						<stop stopColor="#159BDE"/>
						<stop offset="1" stopColor="#159BDE" stopOpacity="0"/>
						</linearGradient>
						<clipPath id="myCircle">
							<circle cx="375" cy="414"  r="186"  fill="#FFFFFF" />
						</clipPath>
						</defs>
					</svg>
				</g>
				<g className='group4' transform={`translate(-1000, 500) scale(1.7)`} >
					<path className='g1-s' opacity="0.5" d="M559.509 856.661C726.555 897.035 893.595 794.569 932.604 627.798C971.612 461.026 867.818 293.102 700.772 252.728C533.726 212.354 366.686 314.82 327.677 481.592C288.668 648.363 392.463 816.288 559.509 856.661Z" fill="url(#paint0_radial_1376_7310)"/>
					<path className='g1-b' opacity="0.5" d="M700.026 794.638C825.22 753.955 894.846 619.652 855.538 494.662C816.231 369.673 682.876 301.33 557.681 342.013C432.486 382.696 362.861 516.999 402.169 641.988C441.476 766.977 574.831 835.321 700.026 794.638Z" fill="url(#paint1_radial_1376_7310)"/>
					<path className='g1-s' d="M837.623 500.484C873.822 615.591 809.703 739.28 694.401 776.748C579.099 814.216 456.286 751.273 420.086 636.166C383.886 521.059 448.006 397.37 563.308 359.902C678.61 322.433 801.423 385.377 837.623 500.484Z" stroke="url(#paint2_linear_1376_7310)"/>
					<path className='g1-b' opacity="0.3" d="M1106.97 412.959C1189.87 676.577 1043.02 959.845 778.966 1045.65C514.909 1131.46 233.643 987.311 150.739 723.692C67.8342 460.074 214.682 176.806 478.74 90.9986C742.797 5.19117 1024.06 149.34 1106.97 412.959Z" stroke="url(#paint3_linear_1376_7310)"/>
					<image className='img w-[221px]' href="/images/model.png" x="31%" y="25%" fillOpacity='0.5' />
					<foreignObject  className="img font-lato-light italic text-lg text-white  md:block" x="30%" y="15%" width="250px" height="100px">
						<p 
						>Dieses Feature ermöglicht eine besondere Funktion: XYZ</p>
					</foreignObject>
					<image href="/images/sparkle.svg" className="img w-[49px] h-[49px]  md:block"  x="27%" y="14.5%" cx="511.828" cy="696.377" />
					<defs>
						<radialGradient id="paint0_radial_1376_7310" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(710.943 286.105) rotate(103.551) scale(625.09 627.262)">
						<stop stopColor="#2294C3"/>
						<stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
						</radialGradient>
						<radialGradient id="paint1_radial_1376_7310" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(577.331 359.801) rotate(72.9291) scale(478.249 480.41)">
						<stop stopColor="#2294C3"/>
						<stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
						</radialGradient>
						<linearGradient id="paint2_linear_1376_7310" x1="563.158" y1="359.425" x2="698.508" y2="775.939" gradientUnits="userSpaceOnUse">
						<stop stopColor="#159BDE"/>
						<stop offset="1" stopColor="#159BDE" stopOpacity="0"/>
						</linearGradient>
						<linearGradient id="paint3_linear_1376_7310" x1="478.59" y1="90.5216" x2="788.166" y2="1043.19" gradientUnits="userSpaceOnUse">
						<stop stopColor="#159BDE"/>
						<stop offset="1" stopColor="#159BDE" stopOpacity="0"/>
						</linearGradient>
					</defs>
				</g>
				<g className='group4' transform={`translate(350, -100) scale(1.7)`}>
					<path className='g1-s' opacity="0.5" d="M435.17 228.461C401.1 310.48 436.947 406.911 515.236 443.847C593.525 480.782 684.611 444.234 718.681 362.215C752.752 280.196 716.905 183.765 638.616 146.83C560.326 109.895 469.241 146.442 435.17 228.461Z" fill="url(#paint0_radial_1376_7305)"/>
					<path className='g1-s' opacity="0.5" d="M484.552 248.727C463.48 299.455 485.651 359.098 534.073 381.943C582.495 404.787 638.831 382.182 659.904 331.454C680.976 280.725 658.805 221.083 610.383 198.238C561.961 175.394 505.625 197.998 484.552 248.727Z" fill="url(#paint1_radial_1376_7305)"/>
					<path className='g1-b' d="M528.828 394.577C473.798 368.615 448.546 300.793 472.53 243.053C496.515 185.313 560.605 159.641 615.635 185.603C670.666 211.565 695.918 279.387 671.933 337.127C647.948 394.867 583.859 420.539 528.828 394.577Z" stroke="url(#paint2_linear_1376_7305)"/>
					<path className='g1-b' opacity="0.3" d="M453.361 576.243C302.561 505.098 233.458 319.314 299.12 161.242C364.783 3.17 540.295 -67.2101 691.096 3.93416C841.896 75.0784 910.999 260.863 845.336 418.935C779.674 577.007 604.161 647.387 453.361 576.243Z" stroke="url(#paint3_linear_1376_7305)"/>
					<image href="/images/model.png" x="31%" y="14%" fillOpacity='0.5' className="img w-[82px]" />
					<foreignObject  className="img font-lato-light  italic text-lg text-white  md:block" x="43%" y="10.5%" width="250px" height="100px">
						<p 
						>Dieses Feature ermöglicht eine besondere Funktion: XYZ</p>
					</foreignObject>
					<image href="/images/sparkle.svg" className="img w-[49px] h-[49px]  md:block"  x="40.5%" y="10%" cx="511.828" cy="696.377" />
					<defs>
						<radialGradient id="paint0_radial_1376_7305" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(701.473 364.089) rotate(-154.349) scale(316.051 323.692)">
						<stop stopColor="#2294C3"/>
						<stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
						</radialGradient>
						<radialGradient id="paint1_radial_1376_7305" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(649.26 332.613) rotate(-154.349) scale(195.477 200.203)">
						<stop stopColor="#2294C3"/>
						<stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
						</radialGradient>
						<linearGradient id="paint2_linear_1376_7305" x1="672.395" y1="337.345" x2="468.067" y2="252.468" gradientUnits="userSpaceOnUse">
						<stop stopColor="#159BDE"/>
						<stop offset="1" stopColor="#159BDE" stopOpacity="0"/>
						</linearGradient>
						<linearGradient id="paint3_linear_1376_7305" x1="845.798" y1="419.153" x2="287.73" y2="187.333" gradientUnits="userSpaceOnUse">
						<stop stopColor="#159BDE"/>
						<stop offset="1" stopColor="#159BDE" stopOpacity="0"/>
						</linearGradient>
					</defs>
				</g>
				<g className='group4' transform={`translate(900, 380) scale(1.7)`}>
					<path className='g1-b' opacity="0.5" d="M567.326 342.479C557.336 241.826 468.571 166.103 369.064 173.347C269.558 180.59 196.991 268.057 206.981 368.71C216.972 469.362 305.736 545.085 405.243 537.842C504.749 530.598 577.316 443.131 567.326 342.479Z" fill="url(#paint0_radial_1376_7301)"/>
					<path className='g1-s' d="M368.133 162.858C473.501 155.188 567.527 235.375 578.11 342.002C588.694 448.628 511.821 541.255 406.452 548.926C301.084 556.596 207.058 476.409 196.475 369.782C185.892 263.155 262.765 170.528 368.133 162.858Z" stroke="url(#paint1_linear_1376_7301)"/>
					<path className='g1-b' opacity="0.3" d="M354.158 111.881C486.745 102.229 605.052 203.129 618.368 337.289C631.684 471.448 534.961 588.001 402.374 597.652C269.786 607.304 151.48 506.404 138.164 372.244C124.848 238.085 221.571 121.532 354.158 111.881Z" stroke="url(#paint2_linear_1376_7301)"/>
					<image href="/images/model.png" x="18%" y="14%" fillOpacity='0.5' className="img w-[144px]" />
					<foreignObject  className="img font-lato-light  italic text-lg text-white  md:block" x="18%" y="31.5%" width="250px" height="100px">
						<p 
						>Dieses Feature ermöglicht eine besondere Funktion: XYZ</p>
					</foreignObject>
					<image href="/images/sparkle.svg" className="img w-[49px] h-[49px]  md:block"  x="15%" y="31%" cx="511.828" cy="696.377" />
					<defs>
					<radialGradient id="paint0_radial_1376_7301" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(223.424 357.186) rotate(-3.77325) scale(364.21 368.979)">
					<stop stopColor="#2294C3"/>
					<stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
					</radialGradient>
					<linearGradient id="paint1_linear_1376_7301" x1="195.971" y1="369.819" x2="577.619" y2="331.938" gradientUnits="userSpaceOnUse">
					<stop stopColor="#159BDE"/>
					<stop offset="1" stopColor="#159BDE" stopOpacity="0"/>
					</linearGradient>
					<linearGradient id="paint2_linear_1376_7301" x1="137.66" y1="372.281" x2="617.62" y2="324.642" gradientUnits="userSpaceOnUse">
					<stop stopColor="#159BDE"/>
					<stop offset="1" stopColor="#159BDE" stopOpacity="0"/>
					</linearGradient>
					</defs>
				</g>
				<g className='group4' transform={`translate(600, 1300) scale(1.7)`}>
					<image className='img' href="/images/app-ellipse.svg"/>
				</g>
				<g className='group5' transform={`translate(-100, 0) scale(1.2)`}>
					<path className='g1-b' opacity="0.7" d="M376.09 41.1328C598.38 -1.14335 813.492 148.063 856.541 374.416C899.59 600.769 754.268 818.524 531.979 860.8C309.689 903.076 94.5768 753.871 51.5279 527.517C8.47893 301.164 153.8 83.4089 376.09 41.1328Z" stroke="url(#paint0_linear_0_1)"/>
                    <path className='g1-s' opacity="0.3" d="M562.868 790.362C753.811 729.321 860.001 527.812 800.051 340.279C740.1 152.746 536.711 50.2033 345.768 111.244C154.825 172.284 48.6346 373.793 108.585 561.326C168.536 748.86 371.925 851.402 562.868 790.362Z" fill="url(#paint1_radial_0_1)"/>
                    <path className='g1-b' opacity="0.5" d="M526.114 683.802C652.351 643.446 722.556 510.224 682.921 386.241C643.287 262.259 508.821 194.465 382.584 234.821C256.347 275.176 186.142 408.398 225.777 532.381C265.411 656.364 399.877 724.157 526.114 683.802Z" fill="url(#paint2_radial_0_1)"/>
                    <path className='g1-s' opacity="0.5" d="M639.605 400.089C671.721 500.553 614.838 608.535 512.505 641.249C410.172 673.963 301.199 619.002 269.082 518.537C236.966 418.073 293.849 310.091 396.182 277.377C498.516 244.663 607.489 299.624 639.605 400.089Z" stroke="url(#paint3_linear_0_1)" strokeWidth="2"/>
                    <image href="/images/model-group.png" x="11.8%" y="18%" fillOpacity='0.5' className='img w-[30%]'/>
                    <defs>
                    <linearGradient id="paint0_linear_0_1" x1="133.393" y1="277.702" x2="689.269" y2="774.1" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#159BDE"/>
                    <stop offset="1" stopColor="#159BDE" stopOpacity="0"/>
                    </linearGradient>
                    <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(375.738 137.933) rotate(72.664) scale(718.593 731.658)">
                    <stop stopColor="#2294C3"/>
                    <stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
                    </radialGradient>
                    <radialGradient id="paint2_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(402.398 252.466) rotate(72.664) scale(475.079 483.717)">
                    <stop stopColor="#2294C3"/>
                    <stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="paint3_linear_0_1" x1="395.878" y1="276.424" x2="512.809" y2="642.202" gradientUnits="userSpaceOnUse">
                    <stop/>
                    <stop offset="1" stopOpacity="0"/>
                    </linearGradient>
                    </defs>
				</g>
            </svg>

			<Mainlayout navItems={navItems}>
				<Edu />
			</Mainlayout>
		</div>
	)
}

export default Home
