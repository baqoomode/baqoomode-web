import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// This expects DATABASE_URL in .env.local
// Fallback to a dummy postgres URL for frontend-only builds (e.g., on Cloudflare Pages) if the env is missing.
const connectionString = process.env.DATABASE_URL || "postgresql://dummy:dummy@dummy.neon.tech/dummy";
const sql = neon(connectionString);

export const db = drizzle(sql, { schema });
