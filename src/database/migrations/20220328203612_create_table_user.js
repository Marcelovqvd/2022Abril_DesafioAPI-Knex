
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = knex => knex.schema.createTable('user', table => {
  table.increments('id')
  table.text('email').unique()
  table.text('password')

  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('updated_at').defaultTo(knex.fn.now())
})

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable('user')