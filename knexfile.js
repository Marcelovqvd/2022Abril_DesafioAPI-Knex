// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      user: 'user',
      database: 'contele_db',
      password: 'password'
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
  },
};
