//modules
import React, { FC, useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { useTranslation } from 'next-i18next';

import { useRouter } from 'next/router';
import Footer from '../common/footer';
import ContactForm from '../common/form/ContactForm';


const Contact = React.forwardRef((props: any, ref: any) => {
    //translate
    const { t } = useTranslation()
    const router = useRouter()

    const containerRef = React.useRef<any>();

    const scrollToRef = (ref: any) => window.scrollTo({ top: ref.current.offsetTop + 400, behavior: 'smooth' })
    useEffect(() => {
        if (router.query.section === 'contact')
            scrollToRef(containerRef)
    }, [])

    // animation
    const animSlideUp = React.useRef<any>([]);
    const animSlideLeft = React.useRef<any>([]);
    const animSlideRight = React.useRef<any>([]);
    const animFadeIn = React.useRef<any>([]);
    const backGradientRef = React.useRef<any>(null);

    const getShowTimeline = (duration: number = 3) => {
        return gsap.timeline({ paused: true, onReverseComplete: () => { if (containerRef.current) gsap.set([containerRef.current, backGradientRef.current], { display: 'none' }) } })
            .fromTo(
                animSlideUp.current[0],
                { opacity: 0 },
                { opacity: 1, duration },
                0
            )
            .fromTo(
                animSlideUp.current,
                { top: 600 },
                { top: 200, duration: duration / 2 },
                0
            )
            .fromTo(
                animSlideUp.current,
                { top: 200 },
                { top: 0, duration: duration / 2 },
                duration / 2
            )
            .fromTo(
                animFadeIn.current,
                { opacity: 0 },
                { opacity: 1, duration: duration / 2 },
                duration / 2
            )
            .fromTo(
                animSlideLeft.current,
                { opacity: 0, left: '-40%' },
                { opacity: 1, left: '-20%', duration: duration / 2 },
                duration / 2
            )
            .fromTo(
                animSlideRight.current[0],
                { opacity: 0, right: '-20%' },
                { opacity: 1, right: 0, duration: duration / 2 },
                duration / 2
            )
            .fromTo(
                animSlideRight.current[1],
                { opacity: 0, right: '-20%' },
                { opacity: 1, right: '-5%', duration: duration / 2 },
                duration / 2
            )
            

    }

    const prevAnimation = React.useRef<any>(null);
    const startAnim = (direction: string, shown: boolean) => {
        if (prevAnimation.current) prevAnimation.current.kill();
        gsap.set([containerRef.current, backGradientRef.current], { display: 'block'});
        if (direction == 'DOWN' && shown) {
            gsap.set(backGradientRef.current, { background: 'linear-gradient(180.42deg, rgba(1, 172, 230, 0.3) 0%, rgba(1, 172, 230, 0) 50%), #000000' });
            prevAnimation.current = getShowTimeline().play(0);
        }
        else if (direction == 'UP' && !shown) {
            gsap.set(backGradientRef.current, { background: 'transparent' });
            prevAnimation.current = getShowTimeline().reverse(0);
        }
    }

    const scroll = (direction: string, offset: number = 17) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if( rect.top <= 0 && rect.top > -offset && offset > 0 ) {
            return false;
        }
        if( Math.abs(rect.top) + window.innerHeight + 500 > rect.height && offset < 0 ) {
            offset = 0;
        }
        gsap.set(containerRef.current, {
            y: '+=' + offset
        })
        return true;
    }

    return (
        <>
            <div id='contact' ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim, scroll } }} className='container m-auto relative py-[120px] md:py-[280px] flex justify-center md:fixed md:hidden md:left-1/2 md:translate-x-[-50%]'>
                <div className=" flex justify-center">
                    <div className='text-white md:w-[50%] xl:w-1/3 text-center relative z-40 px-10 md:px-auto'>
                        <h1 ref={el => {if(el && animSlideUp.current.indexOf(el) == -1)animSlideUp.current.push(el)}} className="relative text-title-sm">{t('landing.contact.title')}</h1>
                        <div ref={el => {if(el && animSlideUp.current.indexOf(el) == -1)animSlideUp.current.push(el); if(el && animFadeIn.current.indexOf(el) == -1)animFadeIn.current.push(el) }} className='md:relative'>
                            <svg className='absolute left-1/2 center-x-transform w-[90%] md:w-[180%] top-[-100px] md:top-[-200px]' viewBox="0 0 488 519" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.7" d="M243.691 23.0004C377.708 23.0004 486.381 133.623 486.381 270.122C486.381 406.62 377.708 517.243 243.691 517.243C109.673 517.243 0.999995 406.62 0.999989 270.122C0.999983 133.623 109.673 23.0005 243.691 23.0004Z" stroke="url(#paint0_linear_0_1)" strokeWidth="2" />
                                <path d="M185.181 77.3883C190.736 69.4988 194 59.8815 194 49.5C193.999 22.7146 172.285 1 145.5 1C118.715 1 97 22.7146 97 49.5C97 76.2854 118.715 98 145.5 98C156.055 98 165.821 94.6269 173.782 88.9012L193.126 97.2375L185.181 77.3883Z" stroke="#159BDE" strokeWidth="2" opacity="0.8" strokeMiterlimit="10" />
                                <defs>
                                    <linearGradient id="paint0_linear_0_1" x1="123.644" y1="29.2225" x2="173.848" y2="255.169" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#159BDE" />
                                        <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            {/* <p ref={el => {if(el && animSlideUp.current.indexOf(el) == -1)animSlideUp.current.push(el); if(el && animFadeIn.current.indexOf(el) == -1)animFadeIn.current.push(el) }} className='font-lato text-lg text-white mt-11 text-left tracking-widest'>{t('landing.contact.subtitle')}</p> */}
                            <div className="relative z-10" >
                                <ContactForm />
                            </div>
                            <svg className='z-0 absolute left-1/2 center-x-transform w-[100%] sm:w-[66%] md:w-[150%] bottom-[-140px] sm:bottom-[-190px] md:bottom-[-180px]' viewBox="0 0 412 412" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.7" d="M291.677 300.824C240.073 347.051 160.058 341.948 112.961 289.373C65.8641 236.798 69.5612 156.705 121.165 110.478C172.769 64.2515 252.785 69.3545 299.881 121.93C346.978 174.505 343.281 254.598 291.677 300.824Z" stroke="url(#paint0_linear_1374_3891)" strokeWidth="2" />
                                <path opacity="0.3" d="M304.085 314.68C244.955 367.649 153.288 361.791 99.3426 301.57C45.3966 241.349 49.6204 149.592 108.75 96.6239C167.879 43.6559 259.546 49.5138 313.492 109.735C367.438 169.956 363.214 261.712 304.085 314.68Z" stroke="url(#paint1_linear_1374_3891)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1374_3891" x1="336.251" y1="257.206" x2="238.599" y2="187.246" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#159BDE" />
                                        <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1374_3891" x1="354.496" y1="264.453" x2="243.118" y2="184.659" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#159BDE" />
                                        <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>


                {/* Animate svgs */}
                <svg ref={el => { if(el && animSlideLeft.current.indexOf(el) == -1) animSlideLeft.current.push(el) }} className='hidden md:block absolute w-[70%] top-[680px] left-[-20%] center-y-transform' viewBox="0 0 905 910" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" d="M366.837 821.129C569.435 870.095 772.026 745.822 819.337 543.557C866.647 341.291 740.762 137.628 538.164 88.6614C335.566 39.6951 132.975 163.968 85.6643 366.234C38.3534 568.499 164.238 772.163 366.837 821.129Z" fill="url(#paint0_radial_1452_3608)" />
                    <path opacity="0.5" d="M537.259 745.903C689.099 696.562 773.542 533.675 725.869 382.084C678.196 230.494 516.459 147.605 364.619 196.947C212.78 246.288 128.336 409.175 176.009 560.766C223.683 712.356 385.42 795.245 537.259 745.903Z" fill="url(#paint1_radial_1452_3608)" />
                    <path opacity="0.5" d="M514.454 673.388C626.179 637.082 688.312 517.229 653.234 405.688C618.156 294.148 499.149 233.158 387.425 269.463C275.701 305.769 213.567 425.622 248.645 537.162C283.724 648.703 402.73 709.693 514.454 673.388Z" fill="url(#paint2_radial_1452_3608)" />
                    <path d="M704.238 389.114C748.159 528.775 670.361 678.849 530.465 724.309C390.568 769.77 241.556 693.399 197.635 553.738C153.713 414.076 231.511 264.003 371.407 218.542C511.304 173.082 660.316 249.452 704.238 389.114Z" stroke="url(#paint3_linear_1452_3608)" />
                    <image href="/images/model.png" className='w-[27%]' x="35.5%" y="32%" cx="511.828" cy="696.377" transform="translate(0,0)" />

                    <defs>
                        <radialGradient id="paint0_radial_1452_3608" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(550.5 129.142) rotate(103.551) scale(758.127 760.762)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1452_3608" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(388.452 218.521) rotate(72.9291) scale(580.035 582.655)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint2_radial_1452_3608" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(404.961 285.337) rotate(72.9291) scale(426.792 428.72)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint3_linear_1452_3608" x1="371.257" y1="218.065" x2="535.413" y2="723.227" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>

                <svg ref={el => { if(el && animSlideRight.current.indexOf(el) == -1) animSlideRight.current.push(el) }} className='hidden md:block absolute opacity-80 w-[40%] right-0 top-[80px]' viewBox="0 0 608 553" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.7">
                        <path opacity="0.5" d="M158.339 207.726C123.409 291.813 160.16 390.677 240.424 428.543C320.688 466.41 414.071 428.941 449 344.853C483.93 260.766 447.179 161.903 366.915 124.036C286.651 86.169 193.269 123.638 158.339 207.726Z" fill="url(#paint0_radial_1452_3603)" />
                        <path opacity="0.5" d="M208.966 228.503C187.363 280.511 210.093 341.658 259.736 365.078C309.379 388.499 367.136 365.324 388.74 313.316C410.344 261.308 387.614 200.161 337.971 176.741C288.327 153.32 230.57 176.495 208.966 228.503Z" fill="url(#paint1_radial_1452_3603)" />
                        <path d="M254.353 378.044C197.928 351.424 172.037 281.884 196.629 222.682C221.221 163.481 286.934 137.157 343.359 163.777C399.785 190.398 425.676 259.938 401.084 319.14C376.492 378.341 310.779 404.665 254.353 378.044Z" stroke="url(#paint2_linear_1452_3603)" />
                    </g>
                    <image href="/images/model.png" className='w-[15%]' x="42.5%" y="37%" cx="511.828" cy="696.377" transform="translate(0,0)" />
                    <defs>
                        <radialGradient id="paint0_radial_1452_3603" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(431.358 346.774) rotate(-154.349) scale(324.022 331.856)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1452_3603" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(377.828 314.504) rotate(-154.349) scale(200.407 205.253)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint2_linear_1452_3603" x1="401.546" y1="319.357" x2="192.065" y2="232.34" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>

                <svg ref={el => { if(el && animSlideRight.current.indexOf(el) == -1) animSlideRight.current.push(el) }} className='hidden md:block absolute w-[40%] right-[-5%] top-[10%]' viewBox="0 0 516 590" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M471.592 284.685C463.287 201.018 389.502 138.073 306.787 144.094C224.072 150.115 163.751 222.822 172.055 306.489C180.36 390.157 254.145 453.101 336.86 447.08C419.575 441.059 479.896 368.352 471.592 284.685Z" fill="url(#paint0_radial_1452_3599)" />
                    <path d="M306.024 135.456C393.561 129.083 471.681 195.701 480.474 284.292C489.267 372.882 425.398 449.836 337.86 456.208C250.323 462.58 172.203 395.963 163.41 307.372C154.617 218.781 218.486 141.828 306.024 135.456Z" stroke="url(#paint1_linear_1452_3599)" />
                    <path opacity="0.3" d="M294.402 93.0834C404.565 85.0642 502.869 168.9 513.933 280.377C524.998 391.854 444.628 488.696 334.465 496.715C224.301 504.735 125.998 420.899 114.934 309.422C103.869 197.945 184.239 101.103 294.402 93.0834Z" stroke="url(#paint2_linear_1452_3599)" />
                    <image href="/images/model.png" className='w-[29%]' x="46.5%" y="32%" cx="511.828" cy="696.377" transform="translate(0,0)" />
                    <defs>
                        <radialGradient id="paint0_radial_1452_3599" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(185.724 296.91) rotate(-3.77325) scale(302.75 306.714)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint1_linear_1452_3599" x1="162.906" y1="307.409" x2="480.151" y2="275.92" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_1452_3599" x1="114.43" y1="309.458" x2="513.397" y2="269.859" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className='h-[200px]'>
                </div>
                <div className='hidden md:block'>
                    <Footer />
                </div>
            </div>
            <div ref={backGradientRef} className='md:hidden md:fixed md:w-screen md:h-screen md:z-0'>
            </div>
            <div className='md:hidden'>
                <Footer />
            </div>
        </>
    )
})
Contact.displayName = 'Contact'
export default Contact