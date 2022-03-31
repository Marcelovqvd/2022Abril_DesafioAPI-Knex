const knexfile = require("../../knexfile.js");
const database = require('knex')(knexfile['development']);

module.exports = database;