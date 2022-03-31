const UpdateUser = require("../../useCases/UpdateUserUseCase");

module.exports = class UpdateUserController {
    async route(request, response) {
        const updateUser = await new UpdateUser().updateUser(request.params.id, request.body);
        response.json(updateUser);
    }
};