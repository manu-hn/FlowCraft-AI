import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./src/model/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://flowcraft_owner:Uq0s3dCXymDY@ep-dawn-unit-a5q5iro5.us-east-2.aws.neon.tech/flowcraft?sslmode=require',
  },
  verbose: true,
  strict: true,
})