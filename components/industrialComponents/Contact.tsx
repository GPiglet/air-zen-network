//modules
import React, { FC } from "react"
import ContactForm from "../common/form/ContactForm";
import { useTranslation } from "next-i18next";
import gsap from "gsap";

const Contact: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
    //translate
    const { t } = useTranslation()

    // animation
    const getShowTimeline = (duration: number = 1.5) => {
        return gsap.timeline({ onReverseComplete: () => { if (containerRef.current) gsap.set([containerRef.current], { display: 'none' }); } })
            .fromTo(
                containerRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration },
                0
            )
    }

    const getHideTimeline = (duration: number = 1.5) => {
        return gsap.timeline({ onComplete: () => { if (containerRef.current) gsap.set([containerRef.current], { display: 'none' }); } })
            .fromTo(
                containerRef.current,
                { y: 0, opacity: 1 },
                { y: -100, opacity: 0, duration },
                0
            )
    }

    const containerRef = React.useRef<any>();
    const prevAnimation = React.useRef<any>(null);
    const startAnim = (direction: string, shown: boolean, index: number) => {
        if (prevAnimation.current) prevAnimation.current.kill();
        gsap.set([containerRef.current], { display: 'flex' });
        if (direction == 'DOWN' && shown) prevAnimation.current = getShowTimeline().play(0);
        else if (direction == 'DOWN' && !shown) prevAnimation.current = getHideTimeline().play(0);
        else if (direction == 'UP' && shown) prevAnimation.current = getHideTimeline().reverse(0);
        else if (direction == 'UP' && !shown) prevAnimation.current = getShowTimeline().reverse(0);
    }

    return (
        <div id="technology" ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className="relative md:h-screen md:flex items-center md:hidden md:left-[50%] md:translate-x-[-50%]">
            <div className="container mx-auto relative flex items-center">

                <div className="mx-auto relative ">
                    <svg className="md:absolute md:top-[-10%] translate-x-[-12%]
                xl:top-[-10%] w-[150%] md:w-[60%] xl:w-[90%]
                md:left-1/2 md:translate-x-[-50%]"
                        viewBox="0 0 1000 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse opacity="0.5" cx="456" cy="455.5" rx="406" ry="405.5" fill="url(#paint0_radial_1376_8017)" />
                        <path opacity="0.3" d="M736.5 455.5C736.5 610.139 610.917 735.5 456 735.5C301.083 735.5 175.5 610.139 175.5 455.5C175.5 300.861 301.083 175.5 456 175.5C610.917 175.5 736.5 300.861 736.5 455.5Z" stroke="#7BB690" />
                        <path opacity="0.6" d="M911.5 455.23C911.5 706.369 707.567 909.959 456 909.959C204.434 909.959 0.500062 706.369 0.50004 455.23C0.500018 204.09 204.434 0.499982 456 0.49996C707.567 0.499938 911.5 204.09 911.5 455.23Z" stroke="url(#paint1_radial_1376_8017)" />
                        <circle opacity="0.7" cx="456.212" cy="455.325" r="172.655" transform="rotate(-120 456.212 455.325)" fill="url(#paint2_radial_1376_8017)" />
                        <circle opacity="0.4" cx="456.21" cy="455.325" r="262.062" transform="rotate(-120 456.21 455.325)" fill="url(#paint3_radial_1376_8017)" />
                        <image href="/images/model-group.png" x="20%" y="35%" fillOpacity='0.5' className="w-[50%]" />
                        <defs>
                            <radialGradient id="paint0_radial_1376_8017" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(398.906 240.078) rotate(68.3963) scale(835.646 836.397)">
                                <stop stopColor="#7BB690" />
                                <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint1_radial_1376_8017" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(835.743 296.554) rotate(143.707) scale(903.111 904.639)">
                                <stop stopColor="#7BB690" />
                                <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint2_radial_1376_8017" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(431.932 363.602) rotate(68.4205) scale(355.744)">
                                <stop stopColor="#7BB690" />
                                <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint3_radial_1376_8017" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(419.358 316.104) rotate(68.4205) scale(539.962)">
                                <stop stopColor="#7BB690" />
                                <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>


                    <div className="w-full md:w-2/3 xl:1/2 px-10 mx-auto md:mt-[30%] xl:mt-[50%]">
                        <p className="font-lato-light font-light text-[22px] text-white">{t('education.ournode.tip')}</p>
                        <h1 className="text-title-sm-white">{t('education.ournode.title')}</h1>
                        {
                            t('industrial.ournode.description').split('\n').map((item, index) =>
                                index % 2 === 0 ? (
                                    <p className="font-lato tracking-widest text-white text-lg font-normal" key={index}>{item}</p>
                                ) : (
                                    <div key={index}>
                                        <p className="font-lato font-light tracking-widest text-white text-lg" >{item}
                                        </p><br />
                                    </div>
                                )
                            )
                        }
                    </div>

                </div>
            </div>
            {/* <ContactForm /> */}

        </div >

    );
});

export default Contact
