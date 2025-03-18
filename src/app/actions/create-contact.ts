'use server'

import type { FormSchemaType } from '@/components/contact-form'
import { contacts } from '@/database/schema'
import { db } from '@/services/drizzle.service'
import { v4 } from 'uuid'

export async function createContact(formData: FormSchemaType) {
  await db.insert(contacts).values({ ...formData, id: v4() })
}
