import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const GeminiOutpuSchema = pgTable('geminiOutput', {
    id: serial('id').primaryKey(),
    formData: varchar('formData').notNull(),
    gemeiniResponse: text('gemeiniResponse'),
    templateSlug: varchar('templateSlug').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt'),

})