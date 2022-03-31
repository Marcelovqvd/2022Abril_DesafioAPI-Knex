const { v4: uuidv4 } = require("uuid");

const database = require("../database");
const User = require("../entities/User");

module.exports = class GetUserRepository {
    async getUser(id) {
        const data = await database.select().from("users").where("id", id);

        if (data[0]) {
            const response = new User(data[0].id, data[0].email).getUser();
            return response;
        } else {
            return data;
        }
    }
};