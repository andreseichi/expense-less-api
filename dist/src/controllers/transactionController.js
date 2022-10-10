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
exports.deleteTransaction = exports.createTransaction = exports.getTransactions = void 0;
const transactionService_1 = require("../services/transactionService");
function getTransactions(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { user } = res.locals.payload;
        const transactions = yield transactionService_1.transactionService.getAll(user.id);
        res.send(transactions);
    });
}
exports.getTransactions = getTransactions;
function createTransaction(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { user } = res.locals.payload;
        const { body } = res.locals;
        const transactionInsertData = Object.assign(Object.assign({}, body), { userId: user.id });
        const transaction = yield transactionService_1.transactionService.create(transactionInsertData);
        res.status(201).send(transaction);
    });
}
exports.createTransaction = createTransaction;
function deleteTransaction(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        yield transactionService_1.transactionService.remove(Number(id));
        res.sendStatus(204);
    });
}
exports.deleteTransaction = deleteTransaction;
