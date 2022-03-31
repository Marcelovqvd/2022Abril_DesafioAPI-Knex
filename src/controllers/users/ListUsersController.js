const ListUsers = require("../../useCases/ListUsersUseCase");

module.exports = class ListUsersControllers {
    async route(request, response) {
        const listUsers = await new ListUsers().Execute()
        response.json(listUsers);
    }
};