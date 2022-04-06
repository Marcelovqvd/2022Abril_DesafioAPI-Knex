// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    client: 'pg',
    connection: {
      host: "database",
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
      directory: `${__dirname }/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname }/src/database/seeds`
    }
}
