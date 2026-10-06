import { Request, Response } from "express";
import {
  getWorkspaceById,
  getWorkspaces,
} from "../services/workspaceService";

export function listWorkspaces(_req: Request, res: Response) {
  res.status(200).json(getWorkspaces());
}

export function getWorkspace(req: Request, res: Response) {
  const workspaceId = req.params.workspaceId;
  if (typeof workspaceId !== "string" || workspaceId.length === 0) {
    res.status(400).json({ error: "Invalid workspace ID" });
    return;
  }

  const workspace = getWorkspaceById(workspaceId);
  if (!workspace) {
    res.status(404).json({ error: "Workspace not found" });
    return;
  }

  res.status(200).json(workspace);
}
