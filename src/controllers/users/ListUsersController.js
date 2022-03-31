const ListUsers = require("../../useCases/ListUsersUseCase");

module.exports = class GetAllUserController {
    async route(request, response) {
        const response = await new ListUsers().Execute()
        response.json(response);
    }
};