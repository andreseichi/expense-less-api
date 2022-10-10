"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userBodyFactory = void 0;
const faker_1 = require("@faker-js/faker");
function userBodyFactory() {
    const password = faker_1.faker.internet.password();
    return {
        name: faker_1.faker.name.fullName(),
        email: faker_1.faker.internet.email(),
        pictureUrl: faker_1.faker.internet.url(),
        password,
        confirmPassword: password,
    };
}
exports.userBodyFactory = userBodyFactory;
