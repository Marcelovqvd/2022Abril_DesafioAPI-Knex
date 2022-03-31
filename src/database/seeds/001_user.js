/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

export async function seed(knex) {
  await knex('users').del();
  return await knex('users').insert([
    { email: 'outro@email.com', password: 'password' }
  ]);
}
