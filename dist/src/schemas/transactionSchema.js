"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.transactionSchema = joi_1.default.object({
    amount: joi_1.default.number().required(),
    description: joi_1.default.string().trim().required(),
    type: joi_1.default.string().trim().valid("income", "expense").required(),
    name: joi_1.default.string().trim().required(),
    categoryId: joi_1.default.number().required(),
});
