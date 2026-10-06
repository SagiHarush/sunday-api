import { Router } from "express";
import {
  getWorkspace,
  listWorkspaces,
} from "../controllers/workspaceController";

const router = Router();

router.get("/workspaces", listWorkspaces);
router.get("/workspaces/:workspaceId", getWorkspace);

export default router;
