class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    static badRequest(message) {
        return new ApiError(404, message);
    }

    static Internal(message) {
        return new ApiError(500, message);
    }

    static Forbidden(message) { 
        return new ApiError(403, message); //доступа нет
    }
}

module.exports = ApiError;