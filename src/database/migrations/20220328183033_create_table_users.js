/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = knex => knex.schema.createTable('users', table => {
  table.increments('id')
  table.text('email').unique().notNullable()
  table.text('password')

  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('updated_at').defaultTo(knex.fn.now())
})

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = knex => knex.schema.dropTable('users')
