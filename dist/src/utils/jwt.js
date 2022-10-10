"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function generateAccessToken(user) {
    return jsonwebtoken_1.default.sign({ user }, String(process.env.JWT_ACCESS_SECRET), {
        expiresIn: 60 * 60 * 24, // 1 day
    });
}
exports.generateAccessToken = generateAccessToken;
// export function generateRefreshToken(user: User, jti) {
//   return jwt.sign(
//     {
//       userId: user.id,
//       jti,
//     },
//     String(process.env.JWT_REFRESH_SECRET),
//     {
//       expiresIn: "8h",
//     }
//   );
// }
// export function generateTokens(user: User, jti) {
//   const accessToken = generateAccessToken(user);
//   const refreshToken = generateRefreshToken(user, jti);
//   return {
//     accessToken,
//     refreshToken,
//   };
// }
