class BadRequestError extends Error{
    constructor(message = "Bad Request") {
        super(message)
        this.status = 400;
    }
}

class InternalServerError extends Error{
    constructor(message = "Internal Server Error") {
        super(message)
        this.status = 500;
    }
}

class NotFoundError extends Error{
    constructor(message = "Not found error") {
        super(message)
        this.status = 404;
    }
}

class AuthencationError extends Error{
    constructor(message = "Not found error") {
        super(message)
        this.status = 401;
    }
}

module.exports = {
    BadRequestError,
    InternalServerError,
    NotFoundError,
    AuthencationError
}