const database = require("../database");
const User = require("../entities/User");

module.exports = class ListUsersRepository {
    async All() {
        const users = await database.select().from("users");
        let response = [];
        users.map((element) => {
            const user = new User(element.id, element.email, element.password).getUser()
            response.push(user);
        });
        return response;
    }
};