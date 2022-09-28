//modules
import React, { FC } from "react"
import { useTranslation } from "next-i18next";
import gsap from 'gsap';

const CertainlySafe: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
    //translate
    const { t } = useTranslation()

    const hintList = t('business.secure.list', { returnObjects: true })

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

            <div className="relative items-center md:pt-0 px-10 md:px-0 md:absolute md:top-1/2 md:translate-y-[-50%]">
                <div className="flex flex-wrap md:mt-12">
                    <div className="w-full md:w-2/5 m-auto">
                        <div className="relative">
                            <p className="font-lato-light font-light text-[22px] text-white">{t('business.secure.tip')}</p>
                            <h1 className="text-title-sm-white">{t('business.secure.title')}</h1>
                            {
                                t('business.secure.description').split('\n').map((item, index) =>

                                    <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item}
                                    </p>
                                )
                            }
                            <div className="hidden md:block md:absolute  top-[62px] left-[110%] w-[80%]">
                                {
                                    (hintList as unknown as any[]).map((item, index) =>
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
            <div className="relative h-[42rem] sm:h-[40rem] md:static md:h-auto">
                <img src="/images/phone-back-green.svg" className="absolute max-w-[200%] top-[65%] left-[57%] translate-x-[-50%] translate-y-[-50%] md:w-[65%] md:top-[55%] md:left-[-15%] md:translate-x-0 4xl:w-[80%] 4xl:left-[-25%]" />
                <img src="/images/Business3.png" className="absolute w-[80%] top-[56%] translate-x-[10%] translate-y-[-50%] md:translate-x-0 md:top-[55%] md:w-[22%] md:left-[3%] 4xl:w-[28%] 4xl:left-[-3%]" />
            </div>
        </section>

    );
});
CertainlySafe.displayName = 'CertainlySafe';
export default CertainlySafe
