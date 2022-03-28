const express = require('express');
const knex = require('../database')
const usersRoutes = express.Router()

usersRoutes.post("/users", (request, response) => {
  return response.send()
});

usersRoutes.get("/users", (request, response) => {
  return response.status(200).json({msg: 'get'})
  //return knex('user').then(results => response.json(results))
});

module.export = usersRoutes