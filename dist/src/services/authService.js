"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinService = exports.createUser = void 0;
const bcrypt_1 = require("bcrypt");
const authRepository_1 = require("../repositories/authRepository");
const jwt_1 = require("../utils/jwt");
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const { password, confirmPassword } = user;
        if (password !== confirmPassword) {
            throw {
                type: "BAD_REQUEST",
                message: "Password and confirm password must be the same",
            };
        }
        const userData = {
            name: user.name,
            email: user.email,
            pictureUrl: user.pictureUrl || null,
            password: (0, bcrypt_1.hashSync)(user.password, 10),
        };
        const userDB = yield (0, authRepository_1.findByEmail)(user.email);
        if (userDB) {
            throw {
                type: "CONFLICT",
                message: "User already exists",
            };
        }
        const result = yield (0, authRepository_1.insert)(userData);
        return {
            id: result.id,
            name: result.name,
            email: result.email,
            pictureUrl: result.pictureUrl || null,
            createdAt: result.createdAt,
        };
    });
}
exports.createUser = createUser;
function signinService(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const userDB = yield (0, authRepository_1.findByEmail)(user.email);
        if (!userDB) {
            throw {
                type: "UNAUTHORIZED",
                message: "Invalid email or password",
            };
        }
        const isPasswordMatch = (0, bcrypt_1.compareSync)(user.password, userDB.password);
        if (!isPasswordMatch) {
            throw {
                type: "UNAUTHORIZED",
                message: "Invalid email or password",
            };
        }
        const token = (0, jwt_1.generateAccessToken)({
            id: userDB.id,
            name: userDB.name,
            email: userDB.email,
            pictureUrl: userDB.pictureUrl || null,
        });
        return token;
    });
}
exports.signinService = signinService;
