const DeleteAllUsersUseCase = require("../../useCases/DeleteAllUsersUseCase");

module.exports = class DeleteAllUsersController {
    async route(request, response) {
        const deleteAllUsersUseCase = await new DeleteAllUsersUseCase().delete();
        response.json(deleteAllUsersUseCase);
    }
};