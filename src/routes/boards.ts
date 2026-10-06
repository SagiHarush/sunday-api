import { Router } from "express";
import {
  getBoard,
  listWorkspaceBoards,
} from "../controllers/boardController";

const router = Router();

router.get("/workspaces/:workspaceId/boards", listWorkspaceBoards);
router.get("/boards/:boardId", getBoard);

export default router;
