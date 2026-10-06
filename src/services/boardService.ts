import { boards } from "../data/fixtures";

export function getWorkspaceBoards(workspaceId: string) {
  return boards.filter((board) => board.workspaceId === workspaceId);
}

export function getBoardById(boardId: string) {
  return boards.find((board) => board.id === boardId);
}
