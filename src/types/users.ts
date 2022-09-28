export interface User {
  id: number;
  name: string;
  email: string;
  pictureUrl: string;
  password: string;
  confirmPassword: string;
}

export type UserToken = Omit<User, "password" | "confirmPassword">;

export type UserData = Omit<User, "id">;

export type UserInsertData = Omit<User, "id" | "confirmPassword">;
