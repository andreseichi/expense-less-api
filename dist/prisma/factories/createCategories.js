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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("./../../src/database/prisma");
const categoryFactory_1 = __importDefault(require("./categoryFactory"));
function createCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma_1.prisma.category.createMany({
            data: [
                (0, categoryFactory_1.default)("Education"),
                (0, categoryFactory_1.default)("Family"),
                (0, categoryFactory_1.default)("Transport"),
                (0, categoryFactory_1.default)("Market"),
                (0, categoryFactory_1.default)("Gift"),
                (0, categoryFactory_1.default)("Food"),
                (0, categoryFactory_1.default)("Home"),
                (0, categoryFactory_1.default)("Entertainment"),
                (0, categoryFactory_1.default)("Health"),
                (0, categoryFactory_1.default)("Other"),
            ],
            skipDuplicates: true,
        });
        return yield prisma_1.prisma.category.findMany();
    });
}
exports.default = createCategories;
