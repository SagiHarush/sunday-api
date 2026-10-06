export type BoardAccessLevel = "admin" | "edit" | "view";

export interface BoardMembership {
  boardId: string;
  userId: string;
  accessLevel: BoardAccessLevel;
}
