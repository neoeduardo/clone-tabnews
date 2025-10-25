import database from "infra/database";

beforeAll(cleanDatabase); // antes de tudo, limpa o banco.

async function cleanDatabase() {
  await database.query("DROP SCHEMA public CASCADE; CREATE SCHEMA public;");
}

test("POST /api/v1/migrations should return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  const responseBody1 = await response1.json();

  expect(response1.status).toBe(201);
  expect(Array.isArray(responseBody1)).toBe(true);
  expect(responseBody1.length).toBeGreaterThan(0);

  // Segunda requisição POST
  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  const responseBody2 = await response2.json();

  expect(response2.status).toBe(200);
  expect(Array.isArray(responseBody2)).toBe(true);
  console.info(responseBody2);
  expect(responseBody2.length).toBe(0);
});
