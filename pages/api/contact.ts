import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  try {
    await resend.emails.send({
      from: "b41.ai <onboarding@resend.dev>", // временно, позже заменим на info@b41.ai
      to: [
        "monaldrec@gmail.com",
        // "second@email.com" ← добавишь позже
      ],
      subject: "New contact request — b41.ai",
      html: `
        <h2>New contact request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("CONTACT ERROR:", error);
    return res.status(500).json({ success: false });
  }
}
