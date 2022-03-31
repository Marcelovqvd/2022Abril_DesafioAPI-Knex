const database = require("../database");

module.exports = class DeleteAllUsersRepository {
    async delete() {
        const response = await database.delete().from("users");
        return response;
    }
};