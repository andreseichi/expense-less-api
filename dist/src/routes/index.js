"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaMiddleware_1 = require("../middlewares/schemaMiddleware");
const tokenMiddleware_1 = require("../middlewares/tokenMiddleware");
const tokenSchema_1 = require("../schemas/tokenSchema");
const auth_routes_1 = require("./auth.routes");
const category_routes_1 = require("./category.routes");
const transaction_routes_1 = require("./transaction.routes");
const router = (0, express_1.Router)();
router.get("/", (request, response) => {
    return response.json({ message: "Hello World" });
});
router.use(auth_routes_1.authRouter);
router.use((0, schemaMiddleware_1.validateHeaderSchema)(tokenSchema_1.tokenSchema), tokenMiddleware_1.isAuthenticated);
router.use(transaction_routes_1.transactionRouter);
router.use(category_routes_1.categoryRouter);
exports.default = router;
