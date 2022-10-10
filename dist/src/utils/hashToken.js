"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashToken = void 0;
const node_crypto_1 = require("node:crypto");
function hashToken(token) {
    return (0, node_crypto_1.createHmac)("sha256", token).digest("hex");
}
exports.hashToken = hashToken;
