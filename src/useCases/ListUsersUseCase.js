const ListUsersRepository = require("../repositories/ListUsersRepository");

module.exports = class ListUsers {
    async Execute() {
        return await new ListUsersRepository().All()
    }
};