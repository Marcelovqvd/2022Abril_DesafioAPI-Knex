const DeleteAllUsersRepository = require("../repositories/DeleteAllUsersRepository");
const Responses = require("../utils/Responses");

module.exports = class DeleteAllUsersUseCase {
    async delete() {
        const response = await new DeleteAllUsersRepository().delete();

        if (response > 0) return Responses.Ok("Users deleted");
        if (response === 0) {
            return HttpResponse.NotModified("Database is empty");
        }
    }
};