import { createHmac } from "node:crypto";

export function hashToken(token: string) {
  return createHmac("sha256", token).digest("hex");
}
