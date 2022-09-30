import React, {FC, useEffect, useState} from 'react'

type ReadmoreProps = {
  title: string,
  children?: React.ReactNode
}

const ReadMore :FC<ReadmoreProps> = ({title, children}) => {
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
      setIsReadMore(!isReadMore)
    };
    return (
      <div className="font-light mb-5">
        <div className='relative flex items-center left-[-24px]'>
          <img src={isReadMore ? '/images/sparkle.svg' : '/images/sparkle-minus.svg'} alt="" className='cursor-pointer w-[65px] h-[67px]' onClick={toggleReadMore}/>
          <p className='cursor-pointer' onClick={toggleReadMore}>{title}</p>
        </div>
        <div className={`${isReadMore ? 'hidden' : ''} pt-10`}>
          {children}
        </div>
      </div>
    );
  };

  export default ReadMore