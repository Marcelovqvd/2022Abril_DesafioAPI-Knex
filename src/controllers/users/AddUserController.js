const AddUserUseCase = require("../../useCases/AddUserUseCase");

module.exports = class AddUserController {
    async route(request, response) {
        const { email, password } = request.body;

        const addUserUseCase = await new AddUserUseCase().addUser(email, password);
        response.json(addUserUseCase);
    }
};