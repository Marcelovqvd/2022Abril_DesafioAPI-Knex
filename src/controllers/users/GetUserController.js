const GetUserUseCase = require("../../useCases/GetUserUseCase");

module.exports = class GetUSersController {
    async route(request, response) {
        const response = await new GetUserUseCase().getUser(request.params.id);
        response.json(response);
    }
};