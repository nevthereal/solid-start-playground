import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  driver: "turso",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DB_URL!,
    authToken: process.env.DB_TOKEN,
  },
  schema: "./src/db/schema.ts",
  out: "./migrations",
} satisfies Config;
