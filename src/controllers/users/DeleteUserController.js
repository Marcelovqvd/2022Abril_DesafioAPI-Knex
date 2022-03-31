const DeleteUser = require("../../useCases/DeleteUserUseCase");

module.exports = class DeleteUserController {
    async route(request, response) {
        const DeleteUser = await new DeleteUser().delete(request.params.id);
        res.json(DeleteUser);
    }
};