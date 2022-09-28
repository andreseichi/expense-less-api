import * as authRepository from "../../../src/repositories/authRepository";

import { createUser } from "../../../src/services/authService";
import { userBodyFactory } from "../../factories/userBodyFactory";

describe("SignUp service", () => {
  it("should be able to create a user if valid body is passed", async () => {
    const userInsert = userBodyFactory();

    const expectedUser = {
      ...userInsert,
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(authRepository, "findByEmail").mockResolvedValueOnce(null);
    jest.spyOn(authRepository, "insert").mockResolvedValueOnce(expectedUser);

    await createUser(userInsert);

    expect(authRepository.insert).toHaveBeenCalledTimes(1);
    expect(authRepository.findByEmail).toHaveBeenCalledTimes(1);
  });

  it("should not be able to create a user if password doesn't match confirmPassword", async () => {
    const userInsert = userBodyFactory();
    userInsert.confirmPassword = "confirmPassword diff";

    const expectedUser = {
      ...userInsert,
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(authRepository, "findByEmail").mockResolvedValueOnce(null);
    jest.spyOn(authRepository, "insert").mockResolvedValueOnce(expectedUser);

    const promise = createUser(userInsert);

    expect(authRepository.insert).not.toHaveBeenCalled();
    expect(authRepository.findByEmail).not.toHaveBeenCalled();
    expect(promise).rejects.toEqual({
      type: "BAD_REQUEST",
      message: "Password and confirm password must be the same",
    });
  });
});
