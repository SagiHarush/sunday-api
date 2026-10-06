import { Request, Response } from "express";
import { getBoardById, getWorkspaceBoards } from "../services/boardService";
import { getWorkspaceById } from "../services/workspaceService";
import { getRouteParam } from "./routeParams";

export function listWorkspaceBoards(req: Request, res: Response) {
  const workspaceId = getRouteParam(req, "workspaceId");
  if (!workspaceId) {
    res.status(400).json({ error: "Invalid workspace ID" });
    return;
  }

  if (!getWorkspaceById(workspaceId)) {
    res.status(404).json({ error: "Workspace not found" });
    return;
  }

  res.status(200).json(getWorkspaceBoards(workspaceId));
}

export function getBoard(req: Request, res: Response) {
  const boardId = getRouteParam(req, "boardId");
  if (!boardId) {
    res.status(400).json({ error: "Invalid board ID" });
    return;
  }

  const board = getBoardById(boardId);
  if (!board) {
    res.status(404).json({ error: "Board not found" });
    return;
  }

  res.status(200).json(board);
}
