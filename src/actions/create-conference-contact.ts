'use server'

import {
  sendConferenceConfirmation,
  sendConferenceNotification,
} from '@/services/email-helpers'

interface ConferenceFormData {
  id: string
  name: string
  phone: string
  email: string
  days: string
}

export async function createConferenceContact(formData: ConferenceFormData) {
  try {
    await Promise.all([
      sendConferenceConfirmation({
        name: formData.name,
        phone: formData.phone,
        days: formData.days,
        email: formData.email,
      }),
      sendConferenceNotification({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        days: formData.days,
      }),
    ])

    return { success: true }
  } catch (error) {
    console.error('Erro ao processar inscrição da conferência:', error)
    throw new Error(
      error instanceof Error ? error.message : 'Erro ao processar inscrição',
    )
  }
}
