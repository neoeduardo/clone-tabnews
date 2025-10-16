test("GET /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  expect(response.status).toBe(200);

  // updated_at foi definido?
  expect(responseBody.updated_at).toBeDefined();

  // conteúdo de updated_at é de fato uma ISOString?
  const parseUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(parseUpdatedAt).toEqual(responseBody.updated_at);

  expect(responseBody.dependencies.database.version).toEqual("16.0");
});
