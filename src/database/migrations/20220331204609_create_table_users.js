/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = knex => knex.schema.createTable('users', table => {
      table.uuid("id").notNullable();
      table.string("email").unique().notNullable();
      table.string("password").notNullable;

      table.timestamps('created_at').defaultTo(knex.fn.now())
      table.timestamps('updated_at').defaultTo(knex.fn.now())

  })

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = knex (knex) {
  return knex.schema.dropTable('users');
};
