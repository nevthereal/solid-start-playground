import { Title } from "@solidjs/meta";
import { For, createResource } from "solid-js";
import { db } from "~/db/db";

export default function Home() {
  const [users] = createResource(async () => {
    const response = await db.query.usersTable.findMany();
    return response;
  });

  return (
    <main>
      <Title>Home</Title>
      <h1 class='text-3xl font-bold'>Home</h1>
      <p>This page is pretty solid!</p>
      <For each={users()}>
        {(user) => (
          <li>
            {user.id} - {user.username}
          </li>
        )}
      </For>
    </main>
  );
}
