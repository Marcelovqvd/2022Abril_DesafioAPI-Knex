const { v4: uuidv4 } = require("uuid");

const database = require("../../database.index.js");
const User = require("../entities/User");

module.exports = class addUserRepository {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    async addNewUser() {
        const createnewUser = new User(uuidv4(), this.email, this.password).addUser();
        try {
            const response = await database("users").insert({
                id: createnewUser.id,
                email: createnewUser.email,
                password: createnewUser.password,
            });
            return response;
        } catch (error) {
            return error;
        }
    }
};