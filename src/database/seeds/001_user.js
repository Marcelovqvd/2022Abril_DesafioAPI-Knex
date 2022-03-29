/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = function(knex) {
  return knex('user').del()
  .then(function () {
    return knex('user').insert([
      {email: 'outro@email.com'},
      {password: 'password'},
    ])    
  });
}
