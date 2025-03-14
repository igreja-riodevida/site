import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

const INSTANCE = process.env.DATABASE_URL as string

export default defineConfig({
  schema: './src/database/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: INSTANCE,
  },
})
