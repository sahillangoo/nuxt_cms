import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { join } from 'pathe';
import { useRuntimeConfig } from '#imports'; // Nuxt auto-import

let _db = null;

export const useDB = () => {
  if (!_db) {
    const config = useRuntimeConfig();
    // In a production environment, you might want to configure the path differently
    // or use a different database altogether.
    // For now, we'll use a local SQLite file.
    const sqlitePath = join(process.cwd(), 'server', 'db', 'sqlite.db');
    const sqlite = new Database(sqlitePath);
    _db = drizzle(sqlite);

    // You might want to run migrations here in a development environment
    // For production, migrations should be handled as part of your deployment process
    // import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
    // migrate(_db, { migrationsFolder: join(process.cwd(), 'server', 'db', 'migrations') });
  }
  return _db;
};
