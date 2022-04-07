const bcrypt = require("bcrypt");
const addUserRepository = require("../repositories/AddUserRepository");
const Responses = require("../utils/Responses");

const saltRounds = 10;

module.exports = class AddUserUseCase {
    async addUser(email, password) {

        const cryptPassword = await bcrypt.hash(password, saltRounds);

        const addUser = await new addUserRepository(email, cryptPassword).addNewUser()

        if (!addUser.constraint && addUser.rowCount === 1) {
            return Responses.Ok("Create User success");
        }

        return addUser;
    }
};