module.exports = class HttpResponde {
  static BadRequest(message) {
    return {
      statusCode: 400,
      message: message,
    };
  }
  
  static Created(message) {
      return {
          statusCode: 201,
          message: message,
      };
  }

  static Forbidden(message) {
    return {
      statusCode: 403,
      message: message,
    };
  }
  
  static InternalServerError(message) {
    return {
      statusCode: 500,
      message: message,
    };
  }
  
  static NotFound(message) {
      return {
          statusCode: 404,
          message: message,
      };
  }

  static NotModified(message) {
      return {
          statusCode: 304,
          message: message,
      };
  }

  static Ok(message) {
      return {
          statusCode: 200,
          message: message,
      };
    }  

  static Unauthorized(message) {
      return {
          statusCode: 401,
          message: message,
      };
  }
};