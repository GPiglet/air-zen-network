import React, { FC, useState, useRef, useContext } from 'react'
import { useRouter } from "next/router"

import Button from './Button'
import WhitePaperForm from '../common/form/WhitePaperForm'
import { WhitePaperFormContext } from '../../contexts/WhitePaperFormContext'

type props = {
  className?: string,
}

const WhitePaper: FC<props> = ({className = ''}) => {
  const router = useRouter();

  const papers = [
    {
      title: 'System Overview',
      description: 'Überblick des AirZen Systems in Funktionsweise, Aufbau & Prozessen.',
      download: {
        type: 'page',
        image: 'wp-cover-solution-overview.png',
        heading: 'AIRZEN OS',
        title: 'SOLUTION OVERVIEW',
        description: 'Management summary',
        filename: 'https://airzen.io/whitepaper/Solution Overview.pdf'
      },
      width: 250,
    },
    {
      title: 'Technology Details',
      description: 'Technisch versierte Dokumentation der AirZen OS Software.',
      download: {
        type: 'file',
        filename: 'https://airzen.io/whitepaper/Technology Details.pdf'
      },
      width: 250,
    },
    {
      title: 'Leistungen',
      description: 'Leistungsverzeichnis aller Services & Produkte.',
      download: {
        type: 'file',
        filename: 'https://airzen.io/whitepaper/Leistungen.pdf'
      },
      width: 225,
    }
  ]

  const whitePaperFormContext = useContext(WhitePaperFormContext);

  const onClickDownload = (data: any) => {
    
    if ( data.type == 'file' ) {
      window.open(data.filename, '_blank');
    }
    else {
      console.log(data)
      whitePaperFormContext.setWhitePaper(data);
      whitePaperFormContext.showForm(true);
    }
  }
  return (
    <div className={`relative text-white ${className}`}>
      <p className='text-center text-2xl mb-10 mt-20 md:mt-0'>WHITEPAPER</p>
      <div className='flex flex-col md:flex-row gap-20 justify-center text-lg items-center'>
        {
          papers.map(
            (paper, index) => 
            <div key={index} className='text-center md:text-left' style={{width: paper.width}}>
              <p className='mb-4 text-center md:text-left'>{paper.title}</p>
              <p className='font-light min-h-[100px] text-center md:text-left'>{paper.description}</p>
              <Button title="PDF DOWNLOAD" onClick={()=>onClickDownload(paper.download)}/>
            </div>
          )
        }
      </div>
    </div>      
  )
}

export default WhitePaper