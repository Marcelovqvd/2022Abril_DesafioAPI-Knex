import { Router } from "express";

const usersRoutes = Router();

usersRoutes.post("/users", (request, response) => {
  return response.send()
});

usersRoutes.get("/users", (request, response) => {
  return console.log('get')
});

export { usersRoutes }