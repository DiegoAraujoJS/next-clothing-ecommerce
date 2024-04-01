import "dotenv/config";
import type {Config} from "drizzle-kit";
export default {
  schema: "./src/server/db/schema.ts",
  out: "./src/server/drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.NEON_CONNECTION_STRING!,
  },
} satisfies Config;
