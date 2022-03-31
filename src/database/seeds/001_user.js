/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { email: 'outro@email.com', password: 'password' }
      ]);
    })
}
