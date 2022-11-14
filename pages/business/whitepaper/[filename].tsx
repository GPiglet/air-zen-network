//modules
import React, { FC, useEffect, useRef, useState } from 'react'
import { NextPage } from 'next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticProps } from 'next'
import path from 'path';
import { promises as fs } from 'fs';

import OwnLayout from '../../../layout/own';
import WhitePaper from '../../../components/common/whitepaper';

const WhitePaperPage: NextPage = (props:any) => {
    const whitepaper = props.whitepaper;

    return (
        <OwnLayout hasFooter={true} className='relative flex flex-col items-center mx-auto pt-[6rem] md:pt-[12rem]'>
            <WhitePaper item={whitepaper} />
        </OwnLayout>
    )
}
export default WhitePaperPage

export async function getStaticPaths() {
    const whitepaperPath = path.join(process.cwd(), 'public/whitepapers');
    const locales = await fs.readdir(whitepaperPath);
    const paths: any = [];
    await Promise.all(locales.map( async locale => {
        const files = await fs.readdir(path.join(whitepaperPath, locale));
        paths.push(...files.map(file => {
            return {params: {filename: file.substring(0, file.length-5)}, locale};
        }))
    }))
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const filePath = path.join(process.cwd(), 'public/whitepapers/', locale||'', params?.filename + '.json');
  const whitepaper = JSON.parse(await fs.readFile(filePath, 'utf8'));
  return {
    props: {
      whitepaper,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
}
