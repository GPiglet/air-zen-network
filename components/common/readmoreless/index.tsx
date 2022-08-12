import React, {FC, useEffect, useState} from 'react'

type ReadmoreProps = {
    children: string
}

const ReadMore :FC<ReadmoreProps> = ({children}) => {

    //window size
    const [isMobile, setIsMobile] = useState(false)
   

    useEffect(() => {
       if(window.innerWidth < 920) setIsMobile(true)
      }, [])

    const text = children;
    const [isReadMore, setIsReadMore] = useState(true)
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore)
    };
    return (
      <p className="font-light mb-5">{isReadMore ? (isMobile ? text.slice(0, 0) : text.slice(0, 200) + '...')  : text}
       <picture>
        <source srcSet={isReadMore ? '/images/sparkle.svg' : '/images/sparkle-minus.svg'} type="image/webp" />
        <img src={isReadMore ? '/images/sparkle.svg' : '/images/sparkle-minus.svg'} alt="" className={`absolute md:relative top-[-20px] md:top-auto left-[-50px] md:left-auto cursor-pointer w-[65px] ${isReadMore ? 'h-[67px]' : 'h-[66px]'}`} onClick={toggleReadMore}/>
        </picture>
      </p>
    );
  };

  export default ReadMore