module.exports = class Responses {
  static BadRequest(mensage) {
      return {
          statusCode: 400,
          mensage: mensage,
      };
  }
};