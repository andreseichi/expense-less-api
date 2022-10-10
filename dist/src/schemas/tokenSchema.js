"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.tokenSchema = joi_1.default
    .object({
    authorization: joi_1.default
        .string()
        .pattern(/^Bearer .+$/)
        .required(),
})
    .unknown(true);
