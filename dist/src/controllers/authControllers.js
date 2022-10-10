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
exports.signin = exports.signup = void 0;
const authService_1 = require("../services/authService");
function signup(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body } = res.locals;
        const result = yield (0, authService_1.createUser)(body);
        return res.status(201).send(result);
    });
}
exports.signup = signup;
function signin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body } = res.locals;
        const token = yield (0, authService_1.signinService)(body);
        return res.status(200).send({ token });
    });
}
exports.signin = signin;
