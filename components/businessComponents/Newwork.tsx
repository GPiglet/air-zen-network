//modules
import React, { FC } from "react"
import { useTranslation } from "next-i18next";
import gsap from 'gsap';

const NewWork: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {

    //translate
    const { t } = useTranslation()
    const list = t('business.newwork.list', { returnObjects: true })

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
        <section ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className="pb-16 relative container mx-auto md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]">

            <div className="relative md:flex items-center px-10 md:px-0 h-full">
                <div className="flex flex-wrap md:pt-0 md:mt-12">
                    <div className="w-full md:w-2/5 m-auto">
                        <div className="relative">
                            <p className="font-lato-light font-light text-[22px] text-white">{t('business.newwork.tip')}</p>
                            <h1 className="text-title-sm">{t('business.newwork.title')}</h1>
                            {
                                t('business.newwork.description').split('\n').map((item, index) =>
                                    <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item}
                                    </p>
                                )
                            }
                            <div className="hidden md:block md:absolute  top-[62px] left-[110%] w-[80%]">
                                {
                                    (list as unknown as any[]).map((item, index) =>
                                        <div className="flex mb-12" key={index}>
                                            <picture>
                                                <source srcSet="/images/check-icon.svg" type="image/webp" />
                                                <img src="/images/check-icon.svg" className="w-[28px] h-[22px] mr-[10px]" alt="" />
                                            </picture>
                                            <div className="text-white tracking-[0.08em] w-2/3">
                                                <p className="font-lato text-lg font-medium">{item.split('\n')[0]} </p>
                                                <p className="font-lato-light text-lg font-light">{item.split('\n')[1]}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-[46rem] sm:h-[46rem] md:static md:h-auto">
                <svg className="absolute top-[-10%] w-[230%] translate-x-[-50%] left-[50%] sm:top-[-15%] sm:w-[120%] md:translate-x-[-50%] md:left-[-15%] md:translate-x-0 md:top-[53%] md:translate-y-[-50%] md:w-[64%] 4xl:w-[90%]  4xl:left-[-35%] 4xl:top-[50%]" viewBox="0 0 692 692" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.8">
                        <ellipse opacity="0.7" cx="345.838" cy="345.661" rx="233.997" ry="234.212" transform="rotate(-180 345.838 345.661)" fill="url(#paint0_radial_1376_5668)"/>
                        <path className="opacity-0 md:opacity-30" d="M101.168 345.66C101.168 210.409 210.711 100.766 345.838 100.766C480.965 100.766 590.508 210.409 590.508 345.66C590.508 480.912 480.965 590.555 345.838 590.555C210.711 590.555 101.168 480.912 101.168 345.66Z" stroke="#7BB690"/>
                        <path className="opacity-0 md:opacity-60" d="M0.5 345.732C0.5 155.066 155.185 0.500122 346 0.500122C536.815 0.500122 691.5 155.066 691.5 345.732C691.5 536.398 536.815 690.964 346 690.964C155.185 690.964 0.5 536.398 0.5 345.732Z" stroke="url(#paint1_radial_1376_5668)"/>
                        <ellipse opacity="0.7" rx="161.634" ry="161.56" transform="matrix(0.499657 0.866223 -0.865827 0.500343 345.839 345.66)" fill="url(#paint2_radial_1376_5668)"/>
                    </g>
                    <image href="/images/Business2.png" x="33.5%" y="16%" className="w-[32%] md:translate-y-[5%] md:translate-x-[1%]" />
                    <defs>
                        <radialGradient id="paint0_radial_1376_5668" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(321.474 236.155) rotate(68.4387) scale(447.5 447.197)">
                            <stop stopColor="#7BB690" />
                            <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1376_5668" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.8649 474.332) rotate(-36.3186) scale(697.365 698.739)">
                            <stop stopColor="#7BB690" />
                            <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint2_radial_1376_5668" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(115.698 63.0786) rotate(68.4114) scale(277.286 277.379)">
                            <stop stopColor="#7BB690" />
                            <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </section>

    );
});
NewWork.displayName = 'NewWork';
export default NewWork
