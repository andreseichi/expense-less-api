"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlingMiddleware = void 0;
const errorHandlingMiddleware = (error, req, res, next) => {
    if (error.type === "BAD_REQUEST")
        return res.status(400).send({ message: error.message });
    if (error.type === "UNAUTHORIZED")
        return res.status(401).send({ message: error.message });
    if (error.type === "FORBIDDEN")
        return res.status(403).send({ message: error.message });
    if (error.type === "NOT_FOUND")
        return res.status(404).send({ message: error.message });
    if (error.type === "CONFLICT")
        return res.status(409).send({ message: error.message });
    return res.sendStatus(500);
};
exports.errorHandlingMiddleware = errorHandlingMiddleware;
