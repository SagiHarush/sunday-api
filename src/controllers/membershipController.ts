import { Request, Response } from "express";
import { getBoardById } from "../services/boardService";
import { getBoardMembers, getWorkspaceMembers } from "../services/membershipService";
import { getWorkspaceById } from "../services/workspaceService";
import { getRouteParam } from "./routeParams";

export function listWorkspaceMembers(req: Request, res: Response) {
  const workspaceId = getRouteParam(req, "workspaceId");
  if (!workspaceId) {
    res.status(400).json({ error: "Invalid workspace ID" });
    return;
  }

  if (!getWorkspaceById(workspaceId)) {
    res.status(404).json({ error: "Workspace not found" });
    return;
  }

  res.status(200).json(getWorkspaceMembers(workspaceId));
}

export function listBoardMembers(req: Request, res: Response) {
  const boardId = getRouteParam(req, "boardId");
  if (!boardId) {
    res.status(400).json({ error: "Invalid board ID" });
    return;
  }

  if (!getBoardById(boardId)) {
    res.status(404).json({ error: "Board not found" });
    return;
  }

  res.status(200).json(getBoardMembers(boardId));
}
