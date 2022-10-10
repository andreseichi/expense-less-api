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
exports.createCategory = exports.getCategories = void 0;
const categoryService_1 = require("../services/categoryService");
function getCategories(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const categories = yield categoryService_1.categoryService.getAll();
        res.send(categories);
    });
}
exports.getCategories = getCategories;
function createCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body } = res.locals;
        const category = yield categoryService_1.categoryService.create(body);
        res.status(201).send(category);
    });
}
exports.createCategory = createCategory;
