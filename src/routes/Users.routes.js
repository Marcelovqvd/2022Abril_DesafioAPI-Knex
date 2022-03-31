const { Router } = require("express");

const ListUsersController = require("../controllers/users/ListUsersController")
const AddUsersController = require("../controllers/users/AddUsersController");

const usersRoutes = Router()

usersRoutes.get("/users", new ListUsersController().route);
usersRoutes.post("/users", new AddUsersController().route);

export default usersRoutes