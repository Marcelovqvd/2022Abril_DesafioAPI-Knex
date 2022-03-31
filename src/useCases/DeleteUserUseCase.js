const DeleteUserRepository = require("../repositories/DeleteUserRepository");
const { validate } = require("uuid");
const HttpResponse = require("../utils/Responses");

module.exports = class DeleteUser {
    async delete(id) {
        if (validate(id) === true) {
            const response = await new DeleteUserRepository().delete(id);

            if (response > 0) {
                return HttpResponse.Ok("User deleted with succes");
            } else {
                return HttpResponse.NotModified("User does not exist");
            }
        }
        return HttpResponse.NotModified("User is Invalid");
    }
};