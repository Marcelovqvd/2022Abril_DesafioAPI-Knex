const DeleteUser = require("../../useCases/DeleteUserUseCase");

module.exports = class DeleteUserController {
    async route(request, response) {
        const deleteUser = await new DeleteUser().delete(request.params.id);
        response.json(deleteUser);
    }
};