import React, { FC } from 'react'
import { useRouter } from "next/router"

type props = {
  className?: string,
  title?: string,
  item?: any,
  onClick?: ()=> void,
}

const DownloadButton: FC<props> = ({className = '', title='', item, onClick}) => {
  const router = useRouter();
  const onClickDefault = (data: any) => {
    if ( onClick ) {
      onClick();
      return;
    }
    
    if ( data?.type == 'file' ) {
      window.open(data?.filename, '_blank');
    }
    else if ( data?.type == 'page' ) {
      router.push({
        pathname: 'technology/whitepaper/' + data?.filename,
      })
    }
  }

  return (
    <button 
      onClick={()=>onClickDefault(item)}
      className={`border border-[#01ACE6] rounded-[32px] text-center font-light px-8 py-3 text-white/75 uppercase ${className}`}
    >
      {title}
    </button>
  )
}

export default DownloadButton