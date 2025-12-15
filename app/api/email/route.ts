'use server'

import { BookFormSchemaType } from '@/utils/schema'
import { NextResponse } from 'next/server'
import nodemailer, { Transporter } from 'nodemailer'

const transporter: Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
  },
})

/**
 * 處理 POST 請求：用於發送電子郵件
 * * @param request Next.js 的標準 Request 物件
 * @returns JSON 響應
 */
export async function POST(request: Request) {
  try {
    const body: BookFormSchemaType = await request.json()
    const { name, email, requirements } = body

    if (!name || !email || !requirements) {
      return NextResponse.json({ message: 'Missing required fields: name, email, or requirements.' }, { status: 400 })
    }

    const mailOptions = {
      to: process.env.GMAIL_USERNAME, // 實際收件人 (網站管理者或收件箱)
      subject: `[網站聯絡] 來自 ${name} 的訊息`, // 郵件主旨
      text: `
        姓名: ${name}
        Email: ${email}
        訊息: ${requirements}
      `,
      html: `
        <h1>新網站聯絡訊息</h1>
        <p><strong>寄件人姓名:</strong> ${name}</p>
        <p><strong>寄件人 Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <h2>訊息內容:</h2>
        <p style="white-space: pre-wrap; border: 1px solid #ccc; padding: 10px;">${requirements}</p>
      `,
    }
    console.log('Sending email with options:', mailOptions)
    await transporter.verify()
    await transporter.sendMail(mailOptions)
    return NextResponse.json({
      message: 'Email successfully sent!',
      status: 200,
    })
  } catch (error) {
    console.error('Email sending failed:', error)
    return NextResponse.json(
      {
        message: 'Email sending failed.',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
