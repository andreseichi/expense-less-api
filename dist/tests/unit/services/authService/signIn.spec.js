"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const bcrypt = __importStar(require("bcrypt"));
const authRepository = __importStar(require("../../../../src/repositories/authRepository"));
const authService_1 = require("../../../../src/services/authService");
const userBodyFactory_1 = require("../../../factories/userBodyFactory");
jest.mock("bcrypt", () => (Object.assign({ __esModule: true }, jest.requireActual("bcrypt"))));
describe("SignIn service", () => {
    it("should be able to sign in if valid email and password are passed", () => __awaiter(void 0, void 0, void 0, function* () {
        const userInsert = (0, userBodyFactory_1.userBodyFactory)();
        const expectedUser = Object.assign(Object.assign({}, userInsert), { id: 1, createdAt: new Date(), updatedAt: new Date() });
        jest
            .spyOn(authRepository, "findByEmail")
            .mockResolvedValueOnce(expectedUser);
        jest.spyOn(bcrypt, "compareSync").mockReturnValue(true);
        yield (0, authService_1.signinService)(userInsert);
        expect(authRepository.findByEmail).toHaveBeenCalledTimes(1);
        expect(bcrypt.compareSync).toHaveBeenCalledTimes(1);
    }));
    it("should be able to sign in and return a token", () => __awaiter(void 0, void 0, void 0, function* () {
        const userInsert = (0, userBodyFactory_1.userBodyFactory)();
        const expectedUser = Object.assign(Object.assign({}, userInsert), { id: 1, createdAt: new Date(), updatedAt: new Date() });
        jest
            .spyOn(authRepository, "findByEmail")
            .mockResolvedValueOnce(expectedUser);
        jest.spyOn(bcrypt, "compareSync").mockReturnValue(true);
        const token = yield (0, authService_1.signinService)(userInsert);
        expect(token).toBeDefined();
    }));
    it("should throw an error if email is not found", () => __awaiter(void 0, void 0, void 0, function* () {
        const userInsert = (0, userBodyFactory_1.userBodyFactory)();
        jest.spyOn(authRepository, "findByEmail").mockResolvedValueOnce(null);
        const promise = (0, authService_1.signinService)(userInsert);
        expect(authRepository.findByEmail).toHaveBeenCalledTimes(1);
        expect(promise).rejects.toEqual({
            type: "UNAUTHORIZED",
            message: "Invalid email or password",
        });
    }));
    it("should throw an error if password is incorrect", () => __awaiter(void 0, void 0, void 0, function* () {
        const userInsert = (0, userBodyFactory_1.userBodyFactory)();
        const expectedUser = Object.assign(Object.assign({}, userInsert), { id: 1, createdAt: new Date(), updatedAt: new Date() });
        jest
            .spyOn(authRepository, "findByEmail")
            .mockResolvedValueOnce(expectedUser);
        jest.spyOn(bcrypt, "compareSync").mockReturnValue(false);
        const promise = (0, authService_1.signinService)(userInsert);
        expect(authRepository.findByEmail).toHaveBeenCalledTimes(1);
        expect(promise).rejects.toEqual({
            type: "UNAUTHORIZED",
            message: "Invalid email or password",
        });
    }));
});
