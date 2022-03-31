const { Router } = require("express");

const ListUsersController = require("../controllers/users/ListUsersController")

const usersRoutes = Router()

usersRoutes.get("/users", new ListUsersController().route);

export default usersRoutes