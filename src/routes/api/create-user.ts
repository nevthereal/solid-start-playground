import type { APIEvent } from "@solidjs/start/server";
import { db } from "~/db/db";
import { usersTable } from "~/db/schema";

export async function POST({ params, request }: APIEvent) {
  console.log(request.url);

  await db.insert(usersTable).values({
    username: request.url,
  });
}
