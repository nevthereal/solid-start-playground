import type { Config } from "drizzle-kit";

export default {
  driver: "turso",
  dialect: "sqlite",
  dbCredentials: {
    url: import.meta.env.DB_URL,
    authToken: import.meta.env.DB_TOKEN,
  },
  schema: "./src/db/schema.ts",
  out: "./migrations",
} satisfies Config;
