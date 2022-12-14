//modules
import React, { FC } from "react"
import { useTranslation } from "next-i18next";
import gsap from 'gsap';
import Sparkle from "../common/sparkle";

const PrepareSuccess: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
    //translate
    const { t } = useTranslation()

    // animation
    const getShowTimeline = (duration: number = 1) => {
        return gsap.timeline({ onReverseComplete: () => { if (containerRef.current) gsap.set([containerRef.current], { display: 'none' }); } })
            .fromTo(
                containerRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration },
                1
            )
    }

    const getHideTimeline = (duration: number = 1) => {
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
        gsap.set([containerRef.current], { display: 'block' });
        if (direction == 'DOWN' && shown) prevAnimation.current = getShowTimeline().play(0);
        else if (direction == 'DOWN' && !shown) prevAnimation.current = getHideTimeline().play(0);
        else if (direction == 'UP' && shown) prevAnimation.current = getHideTimeline().reverse(0).delay(1);
        else if (direction == 'UP' && !shown) prevAnimation.current = getShowTimeline().reverse(0);
    }

    return (
        <section id="easy" ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className="container relative mx-auto pb-16 sm:pb-32 md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]">

            <div className="relative items-center px-10 md:px-0 md:absolute md:top-1/2 md:translate-y-[-50%]">
                <div className="flex flex-wrap sm:w-[65%] md:mt-12 md:w-full">
                    <div className="w-full md:pl-[230px] md:w-[90%] xl:pl-0 xl:w-2/5 m-auto">
                        <div className="relative">
                            <p className="font-lato-light font-light text-[22px] text-white">{t('business.preparesuccess.tip')}</p>
                            <h1 className="text-title-sm-white">{t('business.preparesuccess.title')}</h1>
                            {
                                t('business.preparesuccess.description').split('\n').map((item, index) =>
                                    <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item}
                                    </p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative h-[25rem] sm:h-0 md:static md:h-auto">
                <svg className="absolute top-[-40%] left-[50%] translate-x-[-50%] w-[174%] sm:w-full sm:left-[80%] sm:top-[-600px] md:top-1/2 md:left-[-25%] md:translate-x-0 md:translate-y-[-50%] md:w-[75%] xl:w-full 2xl:w-[1000px]" viewBox="0 0 704 704" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.8">
                        <circle opacity="0.7" cx="206.097" cy="206.099" r="206.098" className="translate-x-[21%] translate-y-[21%]" transform="rotate(-180 206.097 206.099)" fill="url(#paint0_radial_1376_5811)" />
                        <path className="opacity-0 md:opacity-30" d="M53.0685 351.55C53.0685 186.305 186.901 52.3491 351.991 52.3491C517.081 52.3491 650.914 186.305 650.914 351.55C650.914 516.795 517.081 650.751 351.991 650.751C186.901 650.751 53.0685 516.795 53.0685 351.55Z" stroke="#7BB690" />
                        <path className="opacity-0 md:opacity-60" d="M0.5 351.732C0.5 157.752 157.872 0.500122 352 0.500122C546.128 0.500122 703.5 157.752 703.5 351.732C703.5 545.712 546.128 702.964 352 702.964C157.872 702.964 0.5 545.712 0.5 351.732Z" stroke="url(#paint1_radial_1376_5811)" />
                        <circle opacity="0.7" cx="205.952" cy="206.202" r="127.77" className="translate-x-[21%] translate-y-[21%]" transform="rotate(60 205.952 206.202)" fill="url(#paint2_radial_1376_5811)" />
                    </g>
                    <image href="/images/model.png" x="34%" y="28%" className="w-[32%]" />
                    <defs>
                        <radialGradient id="paint0_radial_1376_5811" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(177.114 96.6091) rotate(68.4205) scale(424.652)">
                            <stop stopColor="#7BB690" />
                            <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1376_5811" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.6417 272.441) rotate(-36.1964) scale(378.797 379.034)">
                            <stop stopColor="#7BB690" />
                            <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint2_radial_1376_5811" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(187.984 138.324) rotate(68.4205) scale(263.262)">
                            <stop stopColor="#7BB690" />
                            <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="absolute z-[2] w-full md:top-1/2 md:left-[-25%] md:translate-x-0 md:translate-y-[-50%] md:w-[75%] xl:w-full 2xl:w-[1000px]">
                    <Sparkle className="relative w-[240px] left-[38%] md:top-[220px] xl:top-[325px] 4xl:top-[426px]">{t('business.preparesuccess.sparkle1')}</Sparkle>
                </div>
            </div>

            <svg className="hidden md:block absolute right-[-19%] md:translate-y-[-400px] md:top-1/2 w-[28%] 2xl:w-[400px] " viewBox="0 0 413 413" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                    <circle opacity="0.7" cx="206.097" cy="206.099" r="206.098" transform="rotate(-180 206.097 206.099)" fill="url(#paint0_radial_1376_5811)" />
                    <path opacity="0.6" d="M15.1172 206.04C15.1172 101.108 100.628 16.04 206.117 16.04C311.606 16.04 397.117 101.108 397.117 206.04C397.117 310.972 311.606 396.04 206.117 396.04C100.628 396.04 15.1172 310.972 15.1172 206.04Z" stroke="url(#paint1_radial_1376_5811)" />
                    <circle opacity="0.7" cx="205.952" cy="206.202" r="127.77" transform="rotate(60 205.952 206.202)" fill="url(#paint2_radial_1376_5811)" />
                </g>
                <image href="/images/model.png" x="33.5%" y="20%" className="w-[34%]" />

                <defs>
                    <radialGradient id="paint0_radial_1376_5811" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(177.114 96.6091) rotate(68.4205) scale(424.652)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_1376_5811" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.6417 272.441) rotate(-36.1964) scale(378.797 379.034)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_1376_5811" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(187.984 138.324) rotate(68.4205) scale(263.262)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>

            <svg className="hidden md:block absolute right-0 w-[60%] md:top-[60%] xl:top-1/2 right-[-22%] 2xl:w-[900px] " viewBox="0 0 394 397" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                    <ellipse opacity="0.7" cx="197.123" cy="198.596" rx="176.638" ry="177.817" transform="rotate(-180 197.123 198.596)" fill="url(#paint0_radial_1376_5831)" />
                    <path opacity="0.6" d="M43.4369 198.595C43.4369 113.704 112.244 44.8866 197.121 44.8866C281.998 44.8866 350.805 113.704 350.805 198.595C350.805 283.485 281.998 352.303 197.121 352.303C112.244 352.303 43.4369 283.485 43.4369 198.595Z" stroke="url(#paint1_radial_1376_5831)" />
                    <ellipse opacity="0.7" rx="144.937" ry="144.456" transform="matrix(0.497508 0.867459 -0.86458 0.502496 196.999 198.684)" fill="url(#paint2_radial_1376_5831)" />
                </g>
                <image href="/images/model.png" x="26.5%" y="20%" className="w-[46%]" />

                <defs>
                    <radialGradient id="paint0_radial_1376_5831" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(172.283 104.131) rotate(68.5505) scale(366.053 364.278)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_1376_5831" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(68.721 252.346) rotate(-36.3438) scale(305.56 306.246)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_1376_5831" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(124.555 67.7136) rotate(68.3552) scale(297.776 298.499)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </section>

    );
});
PrepareSuccess.displayName = 'PrepareSuccess';
export default PrepareSuccess
