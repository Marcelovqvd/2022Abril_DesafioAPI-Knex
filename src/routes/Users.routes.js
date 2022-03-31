import { Router } from 'express';
import knex from '../database/index.js';

const usersRoutes = Router()

usersRoutes.post('/users', (request, response) => {
  return response.send()
});

usersRoutes.get('/users', async (request, response) => {
  return response.send()
})

export default usersRoutes