import React, {FC, ReactNode} from 'react';
import gsap from 'gsap';

type AZCarouselProps = {
    children: ReactNode,
    className: string
};
const AZCarousel: FC<AZCarouselProps> = ({children, className}) => {
    const refContainer = React.useRef<HTMLDivElement>(null);

    const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
    const showSlideCount = 3;

    const getShowSlideIndexes = (slides: HTMLCollection, showSlideCount: number, activeSlideIndex: number) => {
        const shownSlideIndexes = [];
        for( let i = 0; i < slides.length; i++ ) {
            const slide: any = slides[i];
            if ( slide.style.display != 'none' ) shownSlideIndexes.push(i);
        }

        let start = 0;
        if ( activeSlideIndex == 0 ) start = 0;
        else if ( activeSlideIndex == slides.length - 1 ) start = slides.length - showSlideCount;
        else if ( shownSlideIndexes.length > 0 && activeSlideIndex == shownSlideIndexes[0] ) start = activeSlideIndex == 0 ? activeSlideIndex : activeSlideIndex - 1;
        else if ( shownSlideIndexes.length > 0 && activeSlideIndex == shownSlideIndexes[shownSlideIndexes.length - 1] ) start = activeSlideIndex == slides.length - 1 ? shownSlideIndexes[0] : shownSlideIndexes[1];
        else if ( shownSlideIndexes.length > 0 ) start = shownSlideIndexes[0];        
        
        const indexes = [];
        for ( let i = start; i < start + showSlideCount; i++ ) {
            indexes.push(i);
        }
        
        return indexes;
    }

    const activeSlide = (slide: Element, index: number) => {
        gsap.set(slide, {display: '', scale: 1.2, transformOrigin: 'top center'});
    }

    const deactiveSlide = (slide: Element, index: number, activeIndex: number) => {
        gsap.set(slide, {display: '', scale:0.8, transformOrigin: 'top center'});
    }

    const hideSlide = (slide: Element) => {
        gsap.set(slide, {display: 'none', duration: 1});
    }

    const onClickSlide = (index: number) => {
        setActiveSlideIndex(index);
    }

    React.useEffect(() => {
        if ( refContainer.current ) {
            const slides = refContainer.current.children;
            for ( let i = 0; i < slides.length; i++ ) {
                slides[i].addEventListener('click', () => {
                    onClickSlide(i);
                })
            }
        }
    }, [])

    React.useEffect(() => {
        if ( refContainer.current ) {
            const slides = refContainer.current.children;
            const showSlideIndexes = getShowSlideIndexes(slides, showSlideCount, activeSlideIndex);
            for ( let i = 0; i < slides.length; i++ ) {
                if ( showSlideIndexes.indexOf(i) != -1 && i == activeSlideIndex ) {
                    activeSlide(slides[i], i);
                } 
                else if ( showSlideIndexes.indexOf(i) != -1 && i != activeSlideIndex ) {
                    deactiveSlide(slides[i], i, activeSlideIndex);
                }
                else {
                    hideSlide(slides[i]);
                }
            }
        }
    }, [activeSlideIndex])
    return (
        <div className={`w-full flex ${className}`} ref={refContainer}>
            {children}
        </div>
    )
}

export default AZCarousel;