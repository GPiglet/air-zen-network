//modules
import React, { FC } from "react";
import { useTranslation } from "next-i18next";
import gsap from "gsap";

const FutureProof: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
    //translate
    const { t } = useTranslation()

    const logos = [
        'rexroth',
        'hilti',
        'lenze',
        'man'
    ]

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
        <div id="secure" ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className="relative container mx-auto md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]">

            <div className="z-10 container mx-auto flex self-center relative text-white px-10 md:absolute md:top-1/2 md:translate-y-[-50%]">
                <svg className="absolute hidden md:block
            w-[30%] z-50
            bottom-[-10%] md:bottom-[-70%]
            left-1/2 translate-x-[-50%]"  viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <image href="/images/app-ellipse.svg" className="cursor-pointer " />
                </svg>
                <div className="md:flex justify-end items-center mt-5 md:mt-0  md:h-[60%]">
                    <div className="md:w-[40%]">
                        <p className="font-lato-light  font-light text-[22px] text-white">{t('industrial.secure.tip')}</p>
                        <h1 className="text-title-sm-white">{t('industrial.secure.title')}</h1>
                        {
                            t('industrial.secure.description').split('\n').map((item, index) =>
                                <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item}</p>
                            )
                        }
                    </div>
                </div>
            </div>
            <svg className="hidden md:block md:absolute translate-x-[-10%]
            left-[-49%] md:left-[-45%] xl:left-[-30%] z-10
            top-[90%] xs:top-[75%] sm:top-[50%] md:top-1/2 md:translate-y-[-50%]
            w-[100%] md:w-[100%] xl:w-[80%]"
                viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                    <circle opacity="0.7" cx="581.442" cy="473.606" r="393.406" transform="rotate(-180 581.442 473.606)" fill="url(#paint0_radial_1376_7934)" />
                    <circle opacity="0.3" cx="581.436" cy="473.604" r="411.689" transform="rotate(-180 581.436 473.604)" stroke="#7BB690" />
                    <path opacity="0.6" d="M0.500122 473.727C0.500122 153.277 260.715 -106.5 581.709 -106.5C902.703 -106.5 1162.92 153.277 1162.92 473.727C1162.92 794.176 902.703 1053.95 581.709 1053.95C260.715 1053.95 0.500122 794.176 0.500122 473.727Z" stroke="url(#paint1_radial_1376_7934)" />
                    <circle opacity="0.7" cx="581.433" cy="473.596" r="312.533" transform="rotate(60 581.433 473.596)" fill="url(#paint2_radial_1376_7934)" />
                </g>
                <image href="/images/macbook.png" x="11.2%" y="22%" className="w-[92%]"></image>
                <path opacity="0.8" d="M356.221 443.186C429.094 419.864 469.621 342.876 446.741 271.228C423.861 199.579 346.238 160.402 273.366 183.723C200.493 207.044 159.966 284.032 182.846 355.681C205.726 427.329 283.348 466.507 356.221 443.186Z" fill="url(#paint0_radial_1376_7993)" />
                <defs>
                    <radialGradient id="paint0_radial_1376_7934" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(251.701 231.113) rotate(68.4205) scale(810.588)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_1376_7934" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-177.139 642.65) rotate(-36.2932) scale(1152.08 1154.03)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_1376_7934" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(263.065 274.067) rotate(68.4205) scale(643.954)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint0_radial_1376_7993" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(263.065 274.067) rotate(79.2367) scale(272.408 277.082)">
                        <stop stopColor="#479CDA" />
                        <stop offset="1" stopColor="#60A9AF" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
});
FutureProof.displayName = 'FutureProof';
export default FutureProof;
