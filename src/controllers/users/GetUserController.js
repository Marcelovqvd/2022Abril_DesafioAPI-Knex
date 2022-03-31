const GetUserUseCase = require("../../useCases/GetUserUseCase");

module.exports = class GetUSerController {
    async route(request, response) {
        const getUserUseCase = await new GetUserUseCase().getUser(request.params.id);
        response.json(getUserUseCase);
    }
};