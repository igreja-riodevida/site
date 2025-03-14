import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core'

export const contacts = pgTable('contacts', {
  id: uuid().primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).unique(),
  phone: varchar('phone', { length: 20 }).unique(),
})
