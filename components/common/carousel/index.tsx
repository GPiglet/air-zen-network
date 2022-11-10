import React, {FC, ReactNode} from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/dist/Draggable';

type AZCarouselConfig = {
    position: number,
    shownLength: number,
    step: number,
}

type AZResposiveConfig = {
    breakpoint: number,
    className?: string,
    onInit?: Function,
    onChange?: Function,        // change position of a slide
    onShow?: Function,          // show a slide
    onHide?: Function,          // hide a slide
    onSelect?: Function,        // select a slide
    onDeselect?: Function,      // cancel selection of a slide
    onCalcHeight?: Function,    // calculate height if auto height
    onNext?: Function,
    onPrev?: Function,
    config?: AZCarouselConfig,
}
type AZCarouselProps = {
    children: ReactNode,
    className?: string,
    onInit?: Function,
    onChange?: Function,        // change position of a slide
    onShow?: Function,          // show a slide
    onHide?: Function,          // hide a slide
    onSelect?: Function,        // select a slide
    onDeselect?: Function,      // cancel selection of a slide
    onCalcHeight?: Function,    // calculate height if auto height
    onNext?: Function,
    onPrev?: Function,
    config?: AZCarouselConfig,
    responsive?: AZResposiveConfig[],
};
const AZCarousel: FC<AZCarouselProps> = ({children, className, onInit, onChange, onShow, onSelect, onDeselect, onHide, onNext, onPrev, config, onCalcHeight, responsive}) => {
    let currentConfig = config, currentOnInit = onInit,
        currentOnChange = onChange, currentOnShow = onShow, 
        currentOnSelect = onSelect, currentOnDeselect = onDeselect,
        currentOnHide = onHide, currentOnNext = onNext, currentOnPrev = onPrev, currentOnCalcHeight = onCalcHeight;
    const refContainer = React.useRef<HTMLDivElement>(null);
    let slides: any = [], responsiveIndex = -1, position: number = currentConfig ? currentConfig.position : 0, selectedIndex: number = currentConfig ? currentConfig.position : 0;
    const getFromTo = (pos: number) => {
        return [Math.floor(pos), Math.ceil(pos + (currentConfig ? currentConfig.shownLength : 1)) - 1];
    }
    
    const change = (pos: number) => {
        const [from, end] = getFromTo(pos);
        let maxHeight = 0, shownIndex = 0;
        for( let i = 0; i < slides.length; i++ ) {
            if ( i >= from && i <= end ) {
                const height = slides[i].getBoundingClientRect().height;
                maxHeight = maxHeight < height ? height : maxHeight;
                if ( slides[i].style.display == 'none' ) {
                    slides[i].style.display = 'block';
                    if ( currentOnShow ) currentOnShow(carousel, slides[i], shownIndex, pos, ()=>slides[i].style.display = 'block');
                }
                else {
                    if ( currentOnChange ) currentOnChange(carousel, slides[i], shownIndex, pos);
                }

                shownIndex++;
            }
            else  {
                if ( slides[i].style.display == 'block' ) {
                    if ( currentOnHide ) currentOnHide(carousel, slides[i], i, pos, ()=>slides[i].style.display = 'none');
                    else slides[i].style.display = 'none';
                }
            }
        }

        // if ( refContainer.current && currentOnCalcHeight ) refContainer.current.style.height = currentOnCalcHeight(carousel) + 'px';

        position = pos;
    }

    const next = () => {
        if ( currentOnNext ) {
            if ( currentOnNext(carousel) ) return;
        }

        const step = currentConfig ? currentConfig.step : 1;
        if ( position >= slides.length - 1 ) return;
        select(position + step);
    }

    const prev = () => {
        if ( currentOnPrev ) {
            if ( currentOnPrev(carousel) ) return;
        }

        const step = currentConfig ? currentConfig.step : 1;
        if ( position <= 0 ) return;
        select(position - step);
    }

    const select = (index: number) => {
        if ( currentOnDeselect ) currentOnDeselect(carousel, slides[selectedIndex], selectedIndex, position);
        selectedIndex = index;
        if ( currentOnSelect ) currentOnSelect(carousel, slides[selectedIndex], selectedIndex, position, 'select');

        const [from, end] = getFromTo(position);
        let pos = 0;
        if ( index > from && index < end ) {
            pos = position;
        }
        else if ( index == from ) {
            if ( from > 0 ) pos = position - 1;
            else pos = position;
        }
        else if ( index == end ) {
            if ( end < slides.length - 1 ) pos = position + 1;
            else pos = position;
        }
        else {
            pos = index;
        }

        change(pos);
    }

    const carousel = {
        getRef: ()=>refContainer.current, 
        slides, 
        getPosition: ()=>position, 
        getSelectedIndex: () => selectedIndex,
        getConfig: ()=>currentConfig,
        change, 
        next, 
        prev, 
        select, 
    };

    const init = () => {
        
        change(position);
        selectedIndex = position;
        if ( currentOnSelect) currentOnSelect(carousel, slides[selectedIndex], selectedIndex, position, 'init');

        // Draggable.create(slides, {
        //     type: 'x', 
        //     lockAxis: true, 
        //     inertia: true,
        //     onDrag: function() {
        //         gsap.set(slides.filter((slide: any)=>slide.style.display!='none'), {x: this.x});
        //     }
        // });
        
        if ( refContainer.current && currentOnCalcHeight ) refContainer.current.style.height = currentOnCalcHeight(carousel) + 'px';
        
        if ( currentOnInit ) {
            currentOnInit(carousel);
            return;
        }
    }

    const redraw = () => {
        change(position);
        selectedIndex = position;
        if ( currentOnSelect) currentOnSelect(carousel, slides[selectedIndex], selectedIndex, position, 'redraw');
    }

    const onResize = () => {
        const windowWidth = window.innerWidth;
        const prevResponsiveIndex = responsiveIndex;
        if ( responsive && responsive.length > 0 ) {
            let found = false;
            for ( let i = 0; i < responsive.length; i++ ) {
                if ( windowWidth < responsive[i].breakpoint ) {
                    if ( responsive[i].config ) currentConfig = responsive[i].config;
                    if ( responsive[i].onInit ) currentOnInit = responsive[i].onInit;
                    if ( responsive[i].onChange ) currentOnChange = responsive[i].onChange;
                    if ( responsive[i].onShow ) currentOnShow = responsive[i].onShow;
                    if ( responsive[i].onSelect ) currentOnSelect = responsive[i].onSelect;
                    if ( responsive[i].onDeselect ) currentOnDeselect = responsive[i].onDeselect;
                    if ( responsive[i].onHide ) currentOnHide = responsive[i].onHide;
                    if ( responsive[i].onNext ) currentOnNext = responsive[i].onNext;
                    if ( responsive[i].onPrev ) currentOnPrev = responsive[i].onPrev;
                    if ( responsive[i].onCalcHeight ) currentOnCalcHeight = responsive[i].onCalcHeight;
                    found = true;
                    responsiveIndex = i;
                    break;
                }
            }
            if ( !found ) {
                currentConfig = config;
                currentOnInit = onInit;
                currentOnChange = onChange;
                currentOnShow = onShow;
                currentOnSelect = onSelect;
                currentOnDeselect = onDeselect;
                currentOnHide = onHide;
                currentOnNext = onNext;
                currentOnPrev = onPrev;
                currentOnCalcHeight = onCalcHeight;
                responsiveIndex = -1;
            }
        }

        if ( prevResponsiveIndex != responsiveIndex ) redraw();
        
        if ( refContainer.current && currentOnCalcHeight ) refContainer.current.style.height = currentOnCalcHeight(carousel) + 'px';
    }

    React.useEffect(() => {      
        // gsap.registerPlugin(Draggable);

        if ( refContainer.current ) {
            const children: any = refContainer.current.children;
            for ( let i = 0; i < children.length; i++ ) {
                slides.push(children[i]);
            }

            onResize();
            window.addEventListener('resize', onResize);

            init();
        }

        return ()=>window.removeEventListener('resize', onResize);
    }, [])

    return (
        <div className={`w-full relative ${className}`} ref={refContainer}>
            {React.Children.map(children, (child: any) => {
                return React.cloneElement(child, {style: {display: 'none', position: 'absolute'}});
            })}
        </div>
    )
}

AZCarousel.defaultProps = {
    className: '',
    config: {
        position: 0,
        shownLength: 1,
        step: 1,
    },
    responsive: [],
}

export default AZCarousel;