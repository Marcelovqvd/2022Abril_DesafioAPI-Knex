const AddUsersUseCase = require("../../useCases/AddUsersUseCase");

module.exports = class AddUsersController {
    async route(request, response) {
        const { email, password } = request.body;

        const response = await new AddUsersUseCase().addUser(email, password);
        response.json(response);
    }
};