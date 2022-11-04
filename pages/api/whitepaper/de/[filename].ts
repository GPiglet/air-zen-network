// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// dont use it now
import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const filePath = path.join(process.cwd(), 'public/whitepapers/de', req.query.filename + '.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    res.status(200).json(JSON.parse(fileContents));
  }
  catch(e) {
    res.status(404).end();
  }
}
