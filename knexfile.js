// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'postgresql',
  connection: {
    host: 'localhost',
    user: 'marcelo',
    database: 'contele_db',
    password: '123'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/src/database/migrations`,
    disableMigrationsListValidation: true,
  },
  seeds: {
    directory: `${__dirname}/src/database/seeds`
  }
}
