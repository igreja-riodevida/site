import { ConferenceConfirmation } from '@/components/email-templates/conference-confirmation'
import { ConferenceNotification } from '@/components/email-templates/conference-notification'
import { ContactConfirmation } from '@/components/email-templates/contact-confirmation'
import { ContactNotification } from '@/components/email-templates/contact-notification'

import { sendEmail } from './resend.service'

interface ContactData {
  name: string
  email?: string | null
  phone: string
}

export async function sendContactConfirmation(contactData: ContactData) {
  if (!contactData.email) {
    console.log('Email não fornecido, pulando confirmação para usuário')
    return null
  }

  return await sendEmail({
    to: contactData.email,
    subject: 'Confirmação de inscrição - Igreja Rio de Vida',
    react: ContactConfirmation(contactData),
  })
}

export async function sendContactNotification(contactData: ContactData) {
  if (!process.env.SMTP_TO_EMAIL) {
    throw new Error('SMTP_TO_EMAIL não configurada')
  }

  return await sendEmail({
    to: process.env.SMTP_TO_EMAIL,
    subject: `Nova inscrição: ${contactData.name}`,
    react: ContactNotification(contactData),
  })
}

interface ConferenceData {
  name: string
  phone: string
  email: string
  days: string
}

export async function sendConferenceConfirmation(
  conferenceData: ConferenceData,
) {
  if (!process.env.SMTP_TO_EMAIL) {
    throw new Error('SMTP_TO_EMAIL não configurada')
  }

  return await sendEmail({
    to: conferenceData.email,
    subject: `Confirmação de presença - Conferência: ${conferenceData.name}`,
    react: ConferenceConfirmation(conferenceData),
  })
}

export async function sendConferenceNotification(
  conferenceData: ConferenceData,
) {
  if (!process.env.SMTP_TO_EMAIL) {
    throw new Error('SMTP_TO_EMAIL não configurada')
  }

  return await sendEmail({
    to: process.env.SMTP_TO_EMAIL,
    subject: `Nova inscrição Conferência: ${conferenceData.name}`,
    react: ConferenceNotification(conferenceData),
  })
}
