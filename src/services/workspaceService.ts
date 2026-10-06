import { workspaces } from "../data/fixtures";

export function getWorkspaces() {
  return workspaces;
}

export function getWorkspaceById(workspaceId: string) {
  return workspaces.find((workspace) => workspace.id === workspaceId);
}
