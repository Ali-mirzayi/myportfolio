// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

type Data = {
  message?: string,
  success?: boolean
}

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.Email || !data.Message) {
      return res.status(400).json({ message: "bad request" })
    }
    try {
      await transporter.sendMail({
        from: email,
        to: "alimirzaei7997@gmail.com",
        subject: 'You have some email from your website',
        html: `<!DOCTYPE html><html><head><title></title><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/></head><body><div><p style="font-size:1.7rem;">Email:${data.Email}</p><p style="font-size:1.7rem;">Name:${data.Name}</p><br/><p style="font-size:1.1rem;">Message:${data.Message}</p></div></body></html>`
      });
      return res.status(200).json({ success: true });
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({ message: err.message?.toString() });
    }
  }
}
