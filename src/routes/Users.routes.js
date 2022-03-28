import { Router } from 'express';
import { knex } from '../database/database.js'

const usersRoutes = Router()

usersRoutes.post("/users", (request, response) => {
  return response.send()
});

usersRoutes.get("/users", (request, response) => {
  return knex('user').then(results => response.json(results))
});

export { usersRoutes }