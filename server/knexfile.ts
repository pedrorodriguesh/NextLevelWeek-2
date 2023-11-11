// ### Knexfile config => DB que vai usar e o diretório de migrations.

import type { Knex } from "knex";
import path from "path";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.sqlite")
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations")
    },
    useNullAsDefault: true,
  },
};

module.exports = config;
