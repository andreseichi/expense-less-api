import dotenv from "dotenv";
dotenv.config();

import Cryptr from "cryptr";

const cryptr = new Cryptr(String(process.env.CRYPTR_SECRET));

export function encrypt(text: string): string {
  return cryptr.encrypt(text);
}

export function decrypt(text: string): string {
  return cryptr.decrypt(text);
}
