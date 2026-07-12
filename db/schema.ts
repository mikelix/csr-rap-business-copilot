import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const diagnoses=sqliteTable("diagnoses",{id:integer("id").primaryKey({autoIncrement:true}),payload:text("payload").notNull(),createdAt:text("created_at").notNull()});
