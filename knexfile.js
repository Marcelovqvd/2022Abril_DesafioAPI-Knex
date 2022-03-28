module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: 'user',
      database: 'contelle_db',
      email: 'marcelo@email.com',
      password: 'password'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations',
      disableMigrationsListValidation: true,
    },
    seeds: {
      directory: './src/database/seeds'
    }
  }
};