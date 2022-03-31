const DeleteAllUsersUseCase = require("../../useCases/DeleteAllUsersUseCase");

module.exports = class DeleteAllUsersController {
    async route(request, response) {
        const response = await new DeleteAllUsersUseCase().delete();
        response.json(response);
    }
};