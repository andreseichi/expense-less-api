"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cryptr_1 = __importDefault(require("cryptr"));
const cryptr = new cryptr_1.default(String(process.env.CRYPTR_SECRET));
function encrypt(text) {
    return cryptr.encrypt(text);
}
exports.encrypt = encrypt;
function decrypt(text) {
    return cryptr.decrypt(text);
}
exports.decrypt = decrypt;
