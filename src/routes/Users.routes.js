const express = require('express')
const usersRoutes = express.Router()

usersRoutes.post("/users", (request, response) => {
  return response.send()
});

usersRoutes.get("/users", (request, response) => {
  return console.log('get')
});

module.exports = usersRoutes