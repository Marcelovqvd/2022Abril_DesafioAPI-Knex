const database = require("../../database.index.js");

module.exports = class UpdateUserRepository {
    async update(id, email, password) {
        const response = await database
            .update({
                email: email,
                password: password,
            })
            .from("users")
            .where("id", id);

        return response;
    }
};