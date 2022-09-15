type typeEnum =
  | "BAD_REQUEST"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "CONFLICT";

export interface errors {
  type: typeEnum;
  message: string;
}
