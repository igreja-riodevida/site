import type { ReactElement } from 'react'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendEmailParams {
  to: string | string[]
  subject: string
  react: ReactElement
}

export async function sendEmail({ to, subject, react }: SendEmailParams) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY não configurada')
  }

  if (!process.env.SMTP_FROM_EMAIL) {
    throw new Error('SMTP_FROM_EMAIL não configurada')
  }

  const { data, error } = await resend.emails.send({
    from: `Igreja Rio de Vida <${process.env.SMTP_FROM_EMAIL}>`,
    to,
    subject,
    react,
  })

  if (error) {
    throw new Error(`Erro ao enviar email: ${error.message}`)
  }

  return data
}
