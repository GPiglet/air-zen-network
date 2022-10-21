import React, { FC } from 'react'
import { useTranslation } from 'next-i18next'
import gsap from 'gsap';

const WhitePaper: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
    //translate
    const { t } = useTranslation()
    const paperList = t('business.whitepaper.paperList', { returnObjects: true })
    const graphList = [
        <img key={0} src="/images/whitepaper-back1.svg" className='absolute left-[50%] translate-x-[-50%] max-w-[120%] top-[-90px] md:left-[-65px] md:translate-x-0'/>,
        <img key={1} src="/images/whitepaper-back2.svg" className='absolute left-[50%] translate-x-[-50%] max-w-[120%] top-[-90px] md:left-[-65px] md:translate-x-0'/>,
        <img key={2} src="/images/whitepaper-back3.svg" className='absolute left-[50%] translate-x-[-50%] max-w-[120%] top-[-90px] md:left-[-65px] md:translate-x-0'/>
    ]

    // animation
    const getShowTimeline = (duration: number=1) => {
        return gsap.timeline({onReverseComplete: ()=>{if (containerRef.current)gsap.set([containerRef.current], {display: 'none'});}})
            .fromTo(
                containerRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration },
                1
            )
    }

    const getHideTimeline = (duration: number = 1) => {
        return gsap.timeline({ onComplete: () => { if (containerRef.current)gsap.set([containerRef.current], { display: 'none' }); } })
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
        else if ( direction == 'UP' && shown ) prevAnimation.current = getHideTimeline().reverse(0).delay(1);
        else if (direction == 'UP' && !shown ) prevAnimation.current = getShowTimeline().reverse(0);
    }

    return (
        <div id='whitepaper' ref={(el)=>{containerRef.current=el; if (ref) ref.current = {container: el, startAnim}}} className='container text-white items-center m-auto pt-[100px] md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%] 4xl:pt-0'>
            <div className='w-full text-center '>
                <div>
                    <h1 className="text-title-sm">
                        {t('business.whitepaper.title')}
                    </h1>
                    <p className="px-10 py-2 font-lato-light font-light text-lg tracking-widest">{t('business.whitepaper.subtitle')}</p>
                </div>
                <div className='md:flex justify-between text-left mt-[120px]'>
                    {
                        (paperList as unknown as any[]).map((item, index) =>
                            <div className='relative w-full px-12 mb-64 md:px-6 md:mb-10 md:w-1/3 xl:px-12' key={index}>
                                <div className='relative z-0'>
                                    {graphList[index]}
                                </div>
                                <div className='relative z-10 text-center md:text-left'>
                                    <button className='absolute left-[50%] translate-x-[-50%] w-[80%] mt-72 bg-white rounded-full text-black p-3 uppercase font-lato md:mt-72 md:left-0 md:translate-x-0 xl:mt-80'>{item.button}</button>
                                    <p className="font-lato-light font-light text-lg tracking-widest">{item.tip}</p>
                                    <h1 className="text-title-sm-white mt-4">
                                        {item.title}
                                    </h1>
                                    <p className='font-lato text-lg mt-14 md:mt-8 xl:mt-14'>{item.description}</p>
                                </div>                                
                            </div>
                        )                        
                    }
                </div>
            </div>


        </div>
    )
})
WhitePaper.displayName = 'WhitePaper';
export default WhitePaper