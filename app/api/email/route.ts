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
  secure: true,
})

/**
 * 處理 POST 請求：用於發送電子郵件
 * * @param request Next.js 的標準 Request 物件
 * @returns JSON 響應
 */
export async function POST(request: Request) {
  try {
    const body: BookFormSchemaType = await request.json()
    const { name, email, phone, requirements } = body

    if (!name || !email || !phone || !requirements) {
      return NextResponse.json({ message: 'Missing required fields: name, email, phone or requirements.' }, { status: 400 })
    }

    const mailOptions = {
      to: process.env.GMAIL_RECEIVER,
      subject: `[Geosat 網站聯絡] 來自 ${name} 的訊息`,
      text: `
      姓名: ${name}
      公司名稱: ${body.company_name || '--'}
      國家/地區: ${body.country_region || '--'}
      地址: ${body.street_address || '--'}
      城市: ${body.city || '--'}
      電話: ${phone}
      Email: ${email}
      訊息: ${requirements}
      `,
      html: `
      <div style="font-family: Arial, sans-serif; background: #f9f9f9;">
        <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); padding: 24px;">
          <h2 style="color: #2d7be5; border-bottom: 1px solid #eee; padding-bottom: 8px;">Geosat 聯絡表單通知</h2>
          <div style="margin: 16px 0;">
            <div style="margin-bottom: 4px;"><strong>姓名：</strong>${name}</div>
            <div style="margin-bottom: 4px;"><strong>公司名稱：</strong>${body.company_name || '--'}</div>
            <div style="margin-bottom: 4px;"><strong>國家/地區：</strong>${body.country_region || '--'}</div>
            <div style="margin-bottom: 4px;"><strong>地址：</strong>${body.street_address || '--'}</div>
            <div style="margin-bottom: 4px;"><strong>城市：</strong>${body.city || '--'}</div>
            <div style="margin-bottom: 4px;"><strong>電話：</strong>${phone}</div>
            <div style="margin-bottom: 4px;"><strong>Email：</strong><a href="mailto:${email}" style="color: #2d7be5;">${email}</a></div>
          </div>
          <div style="margin-top: 16px;">
            <h3 style="margin-bottom: 8px; color: #333;">訊息內容</h3>
            <div style="background: #f4f8fb; border-left: 4px solid #2d7be5; padding: 8px; border-radius: 4px; color: #222;">
              ${requirements}
            </div>
          </div>
        </div>
      </div>
      `,
    }
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
