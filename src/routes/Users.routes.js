const { Router } = require("express");

const ListUsersController = require("../controllers/users/ListUsersController")
const AddUserController = require("../controllers/users/AddUserController");
const GetUserController = require("../controllers/users/GetUserController");
const UpdateUserController = require("../controllers/users/UpdateUserController")
const DeleteUserController = require("../controllers/users/DeleteUserController")
const DeleteAllUsersController = require("../controllers/users/DeleteAllUsersController")

const usersRoutes = Router()

usersRoutes.get("/users", new ListUsersController().route);
usersRoutes.post("/users", new AddUserController().route);
usersRoutes.get("/users/:id", new GetUserController().route)
usersRoutes.put("/users/:id", new UpdateUserController().route)
usersRoutes.delete("/users/:id", new DeleteUserController().route())
usersRoutes.delete("/users", new DeleteAllUsersController().route())

export default usersRoutes