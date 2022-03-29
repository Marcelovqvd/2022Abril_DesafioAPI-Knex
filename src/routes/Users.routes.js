const express = require('express');
const knex = require('../database')

const usersRoutes = express.Router()

usersRoutes.post('/users', (request, response) => {
  return response.send()
});

usersRoutes.get('/users', (request, response) => knex('user').then(results => response.json(results)));

module.exports = usersRoutes