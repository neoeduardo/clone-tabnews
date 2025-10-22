import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migrations(request, response) {
  const defaultMigrationOptions = await migrationRunner({
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join("infra", "migrations"), // Evita conflito de DIR entre diferentes SO
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  });

  if (request.method === "GET") {
    const migrations = await migrationRunner(defaultMigrationOptions);
    return response.status(200).json([migrations]);
  }

  if (request.method === "POST") {
    const migrations = await migrationRunner({
      ...defaultMigrationOptions,
      dryRun: false,
    });
    return response.status(200).json([migrations]);
  }

  return response.status(405).end();
}
