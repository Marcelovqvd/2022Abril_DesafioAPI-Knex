module.exports = class User {

  constructor(id, email, password) {
      this.id = id;
      this.email = email;
      this.password = password;
  }

  addUser() {
      return {
          id: this.id,
          email: this.email,
          password: this.password,
      };
  }

  getUser() {
      return {
          id: this.id,
          email: this.email,
          password: this.password,
      };
  }
};