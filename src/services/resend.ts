import { Resend } from 'resend'

const RESEND_APY_KEY = process.env.RESEND_API_KEY

const resend = new Resend(RESEND_APY_KEY)

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'mincomunicacao.irv@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
})
