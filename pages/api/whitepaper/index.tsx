// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  count: number,
  list: Array<any>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const whitepaperPath = path.join(process.cwd(), 'public/whitepapers');
  const locales = await fs.readdir(whitepaperPath);
  const whitepapers = await Promise.all(locales.map( async locale => {
    const files = await fs.readdir(path.join(whitepaperPath, locale));
    return {locale, files: files.map(file => file.substring(0, file.length - 5))};
  }))
    res.status(200).json({count: whitepapers.length, list: whitepapers});
}
