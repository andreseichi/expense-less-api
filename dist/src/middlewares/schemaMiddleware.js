"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHeaderSchema = exports.validateSchema = void 0;
const validateSchema = (schema) => {
    return (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false });
        if (validation.error) {
            return res
                .status(422)
                .send(validation.error.details.map((details) => details.message));
        }
        res.locals.body = validation.value;
        next();
    };
};
exports.validateSchema = validateSchema;
const validateHeaderSchema = (schema) => {
    return (req, res, next) => {
        const validation = schema.validate(req.headers, { abortEarly: false });
        if (validation.error) {
            return res
                .status(422)
                .send(validation.error.details.map((details) => details.message));
        }
        res.locals.headers = validation.value;
        next();
    };
};
exports.validateHeaderSchema = validateHeaderSchema;
