const User = require("../entities/User");

const knex = require('knex')
const knexfile = require('../../knexfile')

const database = knex(knexfile);

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