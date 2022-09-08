


//modules
import React, { FC } from "react"
import { useTranslation } from "next-i18next";
import gsap from 'gsap';

const BusinessNode: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
    //translate
    const { t } = useTranslation()

    // animation
    const getShowTimeline = (duration: number=1.5) => {
        return gsap.timeline({onReverseComplete: ()=>{gsap.set([containerRef.current], {display: 'none'});}})
            .fromTo(
                containerRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration },
                0
            )
    }

    const getHideTimeline = (duration: number = 1.5) => {
        return gsap.timeline({ onComplete: () => { gsap.set([containerRef.current], { display: 'none' }); } })
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
        if ( prevAnimation.current ) prevAnimation.current.kill();
        gsap.set([containerRef.current], {display: 'flex'});
        if ( direction == 'DOWN' && shown ) prevAnimation.current = getShowTimeline().play(0);
        else if ( direction == 'DOWN' && !shown ) prevAnimation.current = getHideTimeline().play(0);
        else if ( direction == 'UP' && shown ) prevAnimation.current = getHideTimeline().reverse(0);
        else if (direction == 'UP' && !shown ) prevAnimation.current = getShowTimeline().reverse(0);
    }

    return (
        <div id="technology" ref={(el)=>{containerRef.current=el; if (ref) ref.current = {container: el, startAnim}}} className="pb-16 relative md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%] md:flex md:items-center">
            {/* mt-[600px] sm:mt-[100%] md:mt-[50%] */}

            <div className="relative px-10 md:px-0 container mx-auto ">
                <svg className="absolute top-[-4%] w-[174%]  md:w-[60%] xl:w-[70%] sm:top-[-1%] sm:w-[80%]  left-[50%] translate-x-[-50%]" viewBox="0 0 700 708" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse opacity="0.5" cx="350.002" cy="353.94" rx="311.623" ry="315.088" fill="url(#paint0_radial_1376_6324)" />
                    <path opacity="0.3" d="M565.18 353.94C565.18 474.044 468.836 571.398 350 571.398C231.165 571.398 134.82 474.044 134.82 353.94C134.82 233.836 231.165 136.481 350 136.481C468.836 136.481 565.18 233.836 565.18 353.94Z" stroke="#7BB690" />
                    <path opacity="0.6" d="M699.5 353.73C699.5 548.818 543.019 706.959 350 706.959C156.982 706.959 0.500048 548.818 0.500031 353.73C0.500014 158.641 156.981 0.499986 350 0.499969C543.019 0.499953 699.5 158.641 699.5 353.73Z" stroke="url(#paint1_radial_1376_6324)" />
                    <ellipse opacity="0.7" rx="133.751" ry="132.932" transform="matrix(-0.495398 -0.868666 0.863344 -0.504616 350.162 353.803)" fill="url(#paint2_radial_1376_6324)" />
                    <ellipse opacity="0.4" rx="203.013" ry="201.769" transform="matrix(-0.495398 -0.868666 0.863344 -0.504616 350.163 353.803)" fill="url(#paint3_radial_1376_6324)" />
                    <image href="/images/model-group.png" x="22.5%" y="35%" fillOpacity='0.5' className="w-[55%]" />

                    <defs>
                        <radialGradient id="paint0_radial_1376_6324" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(306.18 186.549) rotate(68.6363) scale(648.257 643.031)">
                            <stop stopColor="#7BB690" />
                            <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1376_6324" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(641.47 230.433) rotate(143.37) scale(696.192 699.892)">
                            <stop stopColor="#7BB690" />
                            <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint2_radial_1376_6324" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(114.942 62.3117) rotate(68.2998) scale(274.126 275.355)">
                            <stop stopColor="#7BB690" />
                            <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint3_radial_1376_6324" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(174.464 94.5792) rotate(68.2998) scale(416.08 417.945)">
                            <stop stopColor="#7BB690" />
                            <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="flex flex-wrap pt-[400px] md:pt-[42%] align-center">
                    <div className="w-full md:w-[45%] px-10 mx-auto">
                        <p className="font-lato-light font-light text-[22px] text-white">{t('business.ournode.tip')}</p>
                        <h1 className="font-lato font-medium text-[32px] text-white uppercase tracking-[0.08em] mb-10">{t('business.ournode.title')}</h1>
                        {
                            t('business.ournode.description').split('\n').map((item, index) =>
                                index % 2 === 0 ? (
                                    <p className="font-lato tracking-widest text-white text-lg mt-3 font-normal" key={index}>{item}</p>
                                ) : (
                                    < div key={index}>
                                        <p className="font-lato font-light tracking-widest text-white text-lg" >{item}
                                        </p><br />
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
            {/* <BusinessForm /> */}
        </div>

    );
});
BusinessNode.displayName = 'BusinessNode';
export default BusinessNode
