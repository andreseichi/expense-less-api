import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import { UserToken } from "../types/users";

export function generateAccessToken(user: UserToken) {
  return jwt.sign({ user }, String(process.env.JWT_ACCESS_SECRET), {
    expiresIn: 60 * 60 * 24, // 1 day
  });
}

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
