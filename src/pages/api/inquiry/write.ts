import type { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

type ResponseData = {
  status: 'success' | 'error';
  data: any;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method.toUpperCase() !== 'PUT') return res.status(400).end();
  const { title, content, name, email, phone, password } = req.body;
  const data = await sql`
INSERT INTO inquiry (timestamp, title, content, name, email, phone, reply, password)
VALUES (${Math.floor(new Date().getTime() / 1000)}, ${title}, ${content}, ${name}, ${email}, ${phone}, true, ${password});
`;
  return res.status(200).json({ status: 'success', data });
}
