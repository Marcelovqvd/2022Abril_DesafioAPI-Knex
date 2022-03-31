const GetUsersRepository = require("../repositories/GetUserRepository");
const { validate } = require("uuid");
const Responses = require("../utils/Responses");

module.exports = class GetUsersUseCase {
    async getUser(id) {
        if (validate(id) === true) {
            return await new GetUsersRepository().getUser(id);
        }
        return HttpResponse.NotModified("User ID is not valid");
    }
};