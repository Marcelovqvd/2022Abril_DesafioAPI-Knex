const bcrypt = require("bcrypt");
const addUserRepository = require("../repositories/AddUserRepository");
const schema = require("../../validation/addUserValidate");
const Responses = require("../utils/Responses");

const saltRounds = 10;

module.exports = class AddUserUseCase {
    async addUser(email, password) {
        const { error } = schema.validate({ email: email, password: password });

        if (error) return Responses.BadRequest(error.message);

        const cryptPassword = await bcrypt.hash(password, saltRounds);

        const response = await new addUserRepository(email, cryptPassword).addNewUser()

        if (!response.constraint && response.rowCount === 1) {
            return Responses.Ok("Create User success");
        }

        return response;
    }
};