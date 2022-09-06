import React, { FC } from 'react'
import { useTranslation } from 'next-i18next'
import gsap from 'gsap';

const WhitePaper: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
    //translate
    const { t } = useTranslation()
    const paperList = t('business.whitepaper.paperList', { returnObjects: true })
    const graphList = [
        <svg key={0} className='absolute hidden md:block top-[-115px] left-[-10px]' viewBox="0 0 370 374" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M242.536 297.537C304.666 265.209 329.292 189.536 297.542 128.516C265.791 67.4964 189.687 44.237 127.557 76.5649C65.4282 108.893 40.8014 184.566 72.552 245.586C104.303 306.605 180.407 329.865 242.536 297.537Z" fill="url(#paint0_radial_0_1)" />
            <path opacity="0.5" d="M104.743 18.7347C196.029 -24.8162 305.993 15.2224 350.346 108.189C394.698 201.155 356.63 311.817 265.343 355.367C174.057 398.918 64.0927 358.88 19.7404 265.914C-24.6119 172.947 13.4563 62.2856 104.743 18.7347Z" stroke="url(#paint1_linear_0_1)" />
            <defs>
                <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(139.458 83.9792) rotate(62.9026) scale(251.059 255.624)">
                    <stop stopColor="#7BB690" />
                    <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="paint1_linear_0_1" x1="19.2891" y1="266.129" x2="350.797" y2="107.973" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7BB690" />
                    <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>,
        <svg key={1} className='absolute hidden md:block top-[-115px] left-[-10px] w-[90%]' viewBox="0 0 344 340" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M237.143 14.0528C149.421 -22.3392 49.3341 18.0017 13.592 104.157C-22.1502 190.312 19.9875 289.656 107.709 326.048C195.431 362.44 295.518 322.099 331.26 235.944C367.002 149.789 324.864 50.4448 237.143 14.0528Z" fill="url(#paint0_radial_0_1)" />
            <path opacity="0.5" d="M258.572 47.7252C324.912 94.4467 340.138 187.09 292.554 254.654C244.97 322.218 152.613 339.093 86.2735 292.371C19.9336 245.65 4.70737 153.007 52.2912 85.4427C99.8749 17.8785 192.232 1.00365 258.572 47.7252Z" stroke="url(#paint1_linear_0_1)" />
            <defs>
                <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(105.045 307.223) rotate(-67.0764) scale(340.44 346.629)">
                    <stop stopColor="#7BB690" />
                    <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="paint1_linear_0_1" x1="51.8824" y1="85.1548" x2="292.963" y2="254.942" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7BB690" />
                    <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>,
        <svg key={2} className='absolute hidden md:block top-[-115px] left-[-10px]' viewBox="0 0 337 342" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M293.014 111.606C259.59 41.5448 176.712 11.3612 107.902 44.1891C39.0913 77.017 10.4058 160.425 43.8306 230.487C77.2554 300.548 160.133 330.731 228.943 297.904C297.754 265.076 326.439 181.667 293.014 111.606Z" fill="url(#paint0_radial_0_1)" />
            <path opacity="0.5" d="M186.348 340.22C94.5974 349.942 12.1793 282.091 2.27864 188.651C-7.62203 95.2101 58.7471 11.5943 150.497 1.87274C242.248 -7.84884 324.666 60.0019 334.567 153.442C344.467 246.883 278.098 330.499 186.348 340.22Z" stroke="url(#paint1_linear_0_1)" />
            <defs>
                <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(52.5002 217.589) rotate(-25.1128) scale(278.264 283.324)">
                    <stop stopColor="#7BB690" />
                    <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="paint1_linear_0_1" x1="335.064" y1="153.39" x2="1.7814" y2="188.703" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7BB690" />
                    <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    ]

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
        <div id='whitepaper' ref={(el)=>{containerRef.current=el; if (ref) ref.current = {container: el, startAnim}}} className='container text-white items-center m-auto py-[100px] md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]'>
            <div className='w-full text-center '>
                <div>
                    <h1 className="text-title-sm ">
                        {t('business.whitepaper.title')}
                    </h1>
                    <p className="font-lato-light font-light text-lg tracking-widest">{t('business.whitepaper.subtitle')}</p>
                </div>
                <div className='md:flex justify-between text-left mt-[120px]'>
                    {
                        (paperList as unknown as any[]).map((item, index) =>
                            <div className='px-12 mb-10 relative' key={index}>
                                <p className="font-lato-light font-light text-lg tracking-widest">{item.tip}</p>
                                <h1 className="text-title-sm ">
                                    {item.title}
                                </h1>
                                <p className='font-lato text-lg'>{item.description}</p>
                                {graphList[index]}
                                <button className='bg-white rounded-full text-black p-3 mt-10 relative z-10 uppercase font-lato'>{item.button}</button>
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