import { Router } from 'express';
import knex from '../database';

const usersRoutes = Router()

usersRoutes.post('/users', (request, response) => {
  return response.send()
});

usersRoutes.get('/users', (request, response) => knex('users').then(results => response.json(results)));

export default usersRoutes