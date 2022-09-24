import React, { FC, useState } from 'react'
import gsap from 'gsap';
import Footer from '.'

const AnimateFooter: FC<{props?: any, ref: any}> = React.forwardRef((props: any, ref: any) => {
  // animation
  const getShowTimeline = (duration: number=1) => {
    return gsap.timeline({onReverseComplete: ()=>{gsap.set([containerRef.current], {display: 'none'});}})
        .fromTo(
            containerRef.current,
            {y: 100, opacity: 0},
            {y: 0, opacity: 1, duration},
            1
        )
  }

  const getHideTimeline = (duration: number=1) => {
    return gsap.timeline({onComplete: ()=>{gsap.set([containerRef.current], {display: 'none'});}})
        .fromTo(
            containerRef.current,
            {y: 0, opacity: 1},
            {y: -100, opacity: 0, duration},
            0
        )
  }

  const containerRef = React.useRef<any>();
  const prevAnimation = React.useRef<any>(null);
  const startAnim = (direction: string, shown: boolean) => {
    if ( prevAnimation.current ) prevAnimation.current.kill();
    gsap.set([containerRef.current], {display: 'block'});
    if ( direction == 'DOWN' && shown ) prevAnimation.current = getShowTimeline().play(0);
    else if ( direction == 'DOWN' && !shown ) prevAnimation.current = getHideTimeline().play(0);
    else if ( direction == 'UP' && shown ) prevAnimation.current = getHideTimeline().reverse(0).delay(1);
    else if (direction == 'UP' && !shown ) prevAnimation.current = getShowTimeline().reverse(0);
  }

  const scroll = (direction: string, offset: number = 17) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if( rect.top <= 0 && rect.top > -offset && offset > 0 ) {
      return false;
    }
    if( Math.abs(rect.top) + window.innerHeight + 300 > rect.height && offset < 0 ) {
      offset = 0;
    }
    gsap.set(containerRef.current, {
        y: '+=' + offset
    })
    return true;
  }

  return (
    <div ref={(el)=>{containerRef.current=el; if (ref) ref.current = {container: el, startAnim, scroll}}} className="container mx-auto pt-16 relative md:hidden">
      <Footer />
    </div>
  )
})
AnimateFooter.displayName = 'AnimateFooter';

export default AnimateFooter
