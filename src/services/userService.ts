import { users } from "../data/fixtures";

export function getUserById(userId: string) {
  return users.find((user) => user.id === userId);
}
