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
exports.transactionService = void 0;
const transactionRepository_1 = require("../repositories/transactionRepository");
function getAll(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const transactions = yield (0, transactionRepository_1.selectAll)(userId);
        return transactions;
    });
}
function create(createTransactionData) {
    return __awaiter(this, void 0, void 0, function* () {
        const transactionInsertData = Object.assign(Object.assign({}, createTransactionData), { amount: createTransactionData.amount });
        const transaction = yield (0, transactionRepository_1.insert)(transactionInsertData);
        return transaction;
    });
}
function remove(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, transactionRepository_1.deleteTransaction)(id);
    });
}
exports.transactionService = {
    getAll,
    create,
    remove,
};
