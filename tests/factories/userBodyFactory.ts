import { faker } from "@faker-js/faker";
import { UserData } from "../../src/types/users";

export function userBodyFactory(): UserData {
  const password = faker.internet.password();

  return {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    pictureUrl: faker.internet.url(),
    password,
    confirmPassword: password,
  };
}
