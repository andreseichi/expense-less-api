import * as bcrypt from "bcrypt";
import * as authRepository from "../../../src/repositories/authRepository";

import { signinService } from "../../../src/services/authService";
import { userBodyFactory } from "../../factories/userBodyFactory";

jest.mock("bcrypt", () => ({
  __esModule: true,
  ...jest.requireActual("bcrypt"),
}));

describe("SignIn service", () => {
  it("should be able to sign in if valid email and password are passed", async () => {
    const userInsert = userBodyFactory();

    const expectedUser = {
      ...userInsert,
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest
      .spyOn(authRepository, "findByEmail")
      .mockResolvedValueOnce(expectedUser);
    jest.spyOn(bcrypt, "compareSync").mockReturnValue(true);

    await signinService(userInsert);

    expect(authRepository.findByEmail).toHaveBeenCalledTimes(1);
    expect(bcrypt.compareSync).toHaveBeenCalledTimes(1);
  });

  it("should be able to sign in and return a token", async () => {
    const userInsert = userBodyFactory();

    const expectedUser = {
      ...userInsert,
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest
      .spyOn(authRepository, "findByEmail")
      .mockResolvedValueOnce(expectedUser);
    jest.spyOn(bcrypt, "compareSync").mockReturnValue(true);

    const token = await signinService(userInsert);

    expect(token).toBeDefined();
  });

  it("should throw an error if email is not found", async () => {
    const userInsert = userBodyFactory();

    jest.spyOn(authRepository, "findByEmail").mockResolvedValueOnce(null);

    const promise = signinService(userInsert);

    expect(authRepository.findByEmail).toHaveBeenCalledTimes(1);
    expect(promise).rejects.toEqual({
      type: "UNAUTHORIZED",
      message: "Invalid email or password",
    });
  });

  it("should throw an error if password is incorrect", async () => {
    const userInsert = userBodyFactory();

    const expectedUser = {
      ...userInsert,
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest
      .spyOn(authRepository, "findByEmail")
      .mockResolvedValueOnce(expectedUser);
    jest.spyOn(bcrypt, "compareSync").mockReturnValue(false);

    const promise = signinService(userInsert);

    expect(authRepository.findByEmail).toHaveBeenCalledTimes(1);
    expect(promise).rejects.toEqual({
      type: "UNAUTHORIZED",
      message: "Invalid email or password",
    });
  });
});
