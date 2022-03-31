const UpdateUserRepository = require("../repositories/UpdateUserRepository");
const Responses = require("../utils/Responses");
const { validate } = require("uuid");
const addUserUseCaseValidate = require("../useCases/validate/addUserUseCaseValidate");
const bcrypt = require("bcrypt");

module.exports = class UpdateUserUseCase {
    async updateUser(id, data) {
        if (validate(id) === true) {
            const { error } = addUserUseCaseValidate.validate({ email: data.email, password: data.password });

            if (error) return Responses.BadRequest(error.message);

            const passwordCripto = await bcrypt.hash(data.password, 10);

            const updateUserRepository = await new UpdateUserRepository().update(id, data.email, passwordCripto);

            if (updateUserRepository > 0) return Responses.Created("User data edited succefully");
            if (updateUserRepository === 0) {
                return Responses.NotModified("User not edited, id and user non-existent");
            }
        } else {
            return Responses.NotModified("User not edited, id Invalid");
        }
    }
};