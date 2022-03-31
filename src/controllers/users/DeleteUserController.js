const DeleteUser = require("../../useCase/user/DeleteUser");

module.exports = class DeleteUserController {
    async route(request, response) {
        const response = await new DeleteUser().delete(request.params.id);
        res.json(response);
    }
};