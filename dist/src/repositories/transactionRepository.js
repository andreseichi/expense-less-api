"use strict";
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
exports.deleteTransaction = exports.insert = exports.selectAll = void 0;
const prisma_1 = require("../database/prisma");
function selectAll(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const transactions = yield prisma_1.prisma.transaction.findMany({
            where: {
                userId,
            },
            include: {
                Category: {
                    select: {
                        name: true,
                        id: true,
                    },
                },
            },
            orderBy: {
                date: "desc",
            },
        });
        return transactions;
    });
}
exports.selectAll = selectAll;
function insert(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield prisma_1.prisma.transaction.create({
            data: transaction,
        });
        return result;
    });
}
exports.insert = insert;
function deleteTransaction(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma_1.prisma.transaction.delete({
            where: {
                id,
            },
        });
    });
}
exports.deleteTransaction = deleteTransaction;
