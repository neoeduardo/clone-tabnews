import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migrations(request, response) {
  const migrations = await migrationRunner({
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join("infra", "migrations"), // Evita conflito de DIR entre diferentes SO
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  });
  response.status(200).json([migrations]);
}
