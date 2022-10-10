"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const isAuthenticated = (req, res, next) => {
    try {
        const JWT_ACCESS_SECRET = String(process.env.JWT_ACCESS_SECRET);
        const token = res.locals.headers.authorization.split(" ")[1];
        const payload = jsonwebtoken_1.default.verify(JSON.parse(token), JWT_ACCESS_SECRET);
        res.locals.payload = payload;
    }
    catch (error) {
        if (error.message === "jwt expired") {
            return res.status(401).send({ message: "Token expired" });
        }
        return res.status(401).send({ message: "Invalid token" });
    }
    return next();
};
exports.isAuthenticated = isAuthenticated;
