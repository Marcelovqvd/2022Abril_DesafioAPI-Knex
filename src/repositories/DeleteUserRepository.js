const database = require("../database");

module.exports = class DeleteUserRepository {
    async delete(id) {
        const response = await database.delete().from("users").where("id", id);
        return response;
    }
};