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
      subject: `[Geosat Website Contact] Message from ${name}`,
      text: `
        Name: ${name}
        Company Name: ${body.company_name || '--'}
        Country/Region: ${body.country_region || '--'}
        Address: ${body.street_address || '--'}
        City: ${body.city || '--'}
        Phone: ${phone}
        Email: ${email}
        Requirements: ${requirements}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; background: #f9f9f9;">
          <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); padding: 24px;">
            <h2 style="color: #2d7be5; border-bottom: 1px solid #eee; padding-bottom: 8px;">Geosat Contact Form</h2>
            <div style="margin: 16px 0;">
              <div style="margin-bottom: 4px;"><strong>Name：</strong>${name}</div>
              <div style="margin-bottom: 4px;"><strong>Company Name：</strong>${body.company_name || '--'}</div>
              <div style="margin-bottom: 4px;"><strong>Country/Region：</strong>${body.country_region || '--'}</div>
              <div style="margin-bottom: 4px;"><strong>Address：</strong>${body.street_address || '--'}</div>
              <div style="margin-bottom: 4px;"><strong>City：</strong>${body.city || '--'}</div>
              <div style="margin-bottom: 4px;"><strong>Phone：</strong>${phone}</div>
              <div style="margin-bottom: 4px;"><strong>Email：</strong><a href="mailto:${email}" style="color: #2d7be5;">${email}</a></div>
            </div>
            <div style="margin-top: 16px;">
              <h3 style="margin-bottom: 8px; color: #333;">Requirements</h3>
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
