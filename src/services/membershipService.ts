import { boardMemberships, memberships, users } from "../data/fixtures";

export function getWorkspaceMembers(workspaceId: string) {
  return memberships
    .filter((membership) => membership.workspaceId === workspaceId)
    .map((membership) => ({
      ...membership,
      user: users.find((user) => user.id === membership.userId),
    }));
}

export function getBoardMembers(boardId: string) {
  return boardMemberships
    .filter((membership) => membership.boardId === boardId)
    .map((membership) => ({
      ...membership,
      user: users.find((user) => user.id === membership.userId),
    }));
}
