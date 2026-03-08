import { pgTable, text, timestamp, boolean } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    emailVerified: boolean("emailVerified").notNull(),
    image: text("image"),
    createdAt: timestamp("createdAt").notNull(),
    updatedAt: timestamp("updatedAt").notNull()
});

export const session = pgTable("session", {
    id: text("id").primaryKey(),
    userId: text("userId").notNull().references(() => user.id),
    token: text("token").notNull(),
    expiresAt: timestamp("expiresAt").notNull(),
    ipAddress: text("ipAddress"),
    userAgent: text("userAgent"),
    createdAt: timestamp("createdAt").notNull(),
    updatedAt: timestamp("updatedAt").notNull()
});

export const account = pgTable("account", {
    id: text("id").primaryKey(),
    userId: text("userId").notNull().references(() => user.id),
    accountId: text("accountId").notNull(),
    providerId: text("providerId").notNull(),
    accessToken: text("accessToken"),
    refreshToken: text("refreshToken"),
    expiresAt: timestamp("expiresAt"),
    password: text("password"),
    createdAt: timestamp("createdAt").notNull(),
    updatedAt: timestamp("updatedAt").notNull()
});

export const verification = pgTable("verification", {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expiresAt").notNull(),
    createdAt: timestamp("createdAt"),
    updatedAt: timestamp("updatedAt")
});

// baQoo MODE Business Logic Tables

export const product = pgTable("product", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    category: text("category").notNull(), // e.g., 'Light Board', 'Polygon Board'
    description: text("description"),
    imageUrl: text("imageUrl"),
    createdAt: timestamp("createdAt").notNull(),
    updatedAt: timestamp("updatedAt").notNull()
});

export const productVariant = pgTable("product_variant", {
    id: text("id").primaryKey(),
    productId: text("productId").notNull().references(() => product.id),
    modelName: text("modelName").notNull(),
    size: text("size").notNull(), // e.g., '600 * 2400'
    power: text("power"), // e.g., '60w'
    weight: text("weight"), // e.g., '4.5kg'
    price: text("price"), // Optional for now
    specJson: text("specJson"), // For flexible/round board details or extra specs
    createdAt: timestamp("createdAt").notNull(),
    updatedAt: timestamp("updatedAt").notNull()
});

export const inquiry = pgTable("inquiry", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    company: text("company"),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    subject: text("subject").notNull(),
    content: text("content").notNull(),
    status: text("status").default("pending"), // pending, processing, completed
    createdAt: timestamp("createdAt").notNull(),
    updatedAt: timestamp("updatedAt").notNull()
});
