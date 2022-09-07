type typeEnum = "USER_ALREADY_EXISTS" | "another_error";

export interface errors {
  type: typeEnum;
  message: string;
}
