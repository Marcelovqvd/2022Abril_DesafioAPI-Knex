const { v4: uuidv4 } = require("uuid");

const database = require("../database/index");
const User = require("../entities/User");

module.exports = class AddUserRepository {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    async addNewUser() {
        const createnewUser = new User(uuidv4(), this.email, this.password).addUser();
        try {
            const newUser = await database("users").insert({
                id: createnewUser.id,
                email: createnewUser.email,
                password: createnewUser.password,
            });
            return newUser;
        } catch (error) {
            return error;
        }
    }
};