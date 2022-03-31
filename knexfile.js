const development = {
  client: 'pg',
  connection: {
    user: 'user',
    database: 'contele_db',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: __dirname + "/src/data/migrations",
  },
  seeds: {
    directory: './src/database/seeds'
  }
};

export default development