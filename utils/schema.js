import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const ContactForm = pgTable('contactForm', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  message: text('message').notNull(),
  submittedAt: timestamp('submittedAt').defaultNow().notNull(),
});
