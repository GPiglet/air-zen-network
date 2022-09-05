import React, { FC, useState } from 'react'
import gsap from 'gsap';
import Footer from '.'

const AnimateFooter: FC<{props?: any, ref: any}> = React.forwardRef((props: any, ref: any) => {
  // animation
  const getShowTimeline = (duration: number=1.5) => {
    return gsap.timeline({onReverseComplete: ()=>{gsap.set([containerRef.current], {display: 'none'});}})
        .fromTo(
            containerRef.current,
            {y: 100, opacity: 0},
            {y: 0, opacity: 1, duration},
            0
        )
  }

  const getHideTimeline = (duration: number=1.5) => {
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
    else if ( direction == 'UP' && shown ) prevAnimation.current = getHideTimeline().reverse(0);
    else if (direction == 'UP' && !shown ) prevAnimation.current = getShowTimeline().reverse(0);
  }

  return (
    <section ref={(el)=>{containerRef.current=el; if (ref) ref.current = {container: el, startAnim}}} className="container mx-auto pt-16 relative md:hidden">
      <Footer />
    </section>
  )
})

export default AnimateFooter
