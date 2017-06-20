"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FoundrybotError extends Error {
    constructor(message, type = 'validation_error') {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.type = type;
    }
}
exports.FoundrybotError = FoundrybotError;
