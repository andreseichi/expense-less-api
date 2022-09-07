export interface User {
  id: string;
  email: string;
  password: string;
}

export type UserInsertData = Omit<User, "id">;
