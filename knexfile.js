module.exports = {
  development: {
    client: 'pg',
    connection: {
      userName: 'Marcelo',
      database: 'contelle_db',
      email: 'marcelo@email.com',
      password: '123456'
    },
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/src/database/migrations`
  },
  seeds: {
    directory: `${__dirname}/src/database/seeds`
  }
};
