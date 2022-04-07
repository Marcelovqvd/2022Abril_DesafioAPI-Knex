const DeleteUserRepository = require("../repositories/DeleteUserRepository");
const { validate } = require("uuid");
const Responses = require("../utils/Responses");

module.exports = class DeleteUser {
    async delete(id) {
        if (validate(id) === true) {
            const response = await new DeleteUserRepository().delete(id);

            if (response > 0) {
                return Responses.Ok("User deleted with succes");
            } else {
                return Responses.NotModified("User does not exist");
            }
        }
        return Responses.NotModified("User is Invalid");
    }
};