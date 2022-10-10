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
const authRepository = __importStar(require("../../../../src/repositories/authRepository"));
const authService_1 = require("../../../../src/services/authService");
const userBodyFactory_1 = require("../../../factories/userBodyFactory");
describe("SignUp service", () => {
    it("should be able to create a user if valid body is passed", () => __awaiter(void 0, void 0, void 0, function* () {
        const userInsert = (0, userBodyFactory_1.userBodyFactory)();
        const expectedUser = Object.assign(Object.assign({}, userInsert), { id: 1, createdAt: new Date(), updatedAt: new Date() });
        jest.spyOn(authRepository, "findByEmail").mockResolvedValueOnce(null);
        jest.spyOn(authRepository, "insert").mockResolvedValueOnce(expectedUser);
        yield (0, authService_1.createUser)(userInsert);
        expect(authRepository.insert).toHaveBeenCalledTimes(1);
        expect(authRepository.findByEmail).toHaveBeenCalledTimes(1);
    }));
    it("should not be able to create a user if password doesn't match confirmPassword", () => __awaiter(void 0, void 0, void 0, function* () {
        const userInsert = (0, userBodyFactory_1.userBodyFactory)();
        userInsert.confirmPassword = "confirmPassword diff";
        const expectedUser = Object.assign(Object.assign({}, userInsert), { id: 1, createdAt: new Date(), updatedAt: new Date() });
        jest.spyOn(authRepository, "findByEmail").mockResolvedValueOnce(null);
        jest.spyOn(authRepository, "insert").mockResolvedValueOnce(expectedUser);
        const promise = (0, authService_1.createUser)(userInsert);
        expect(authRepository.insert).not.toHaveBeenCalled();
        expect(authRepository.findByEmail).not.toHaveBeenCalled();
        expect(promise).rejects.toEqual({
            type: "BAD_REQUEST",
            message: "Password and confirm password must be the same",
        });
    }));
    it("should not be able to create a user if email already exists", () => __awaiter(void 0, void 0, void 0, function* () {
        const userInsert = (0, userBodyFactory_1.userBodyFactory)();
        const expectedUser = Object.assign(Object.assign({}, userInsert), { id: 1, createdAt: new Date(), updatedAt: new Date() });
        jest
            .spyOn(authRepository, "findByEmail")
            .mockResolvedValueOnce(expectedUser);
        jest.spyOn(authRepository, "insert").mockResolvedValueOnce(expectedUser);
        const promise = (0, authService_1.createUser)(userInsert);
        expect(authRepository.insert).not.toHaveBeenCalled();
        expect(authRepository.findByEmail).toHaveBeenCalledTimes(1);
        expect(promise).rejects.toEqual({
            type: "CONFLICT",
            message: "User already exists",
        });
    }));
});
