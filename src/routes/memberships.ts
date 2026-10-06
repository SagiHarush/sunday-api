import { Router } from "express";
import {
  listBoardMembers,
  listWorkspaceMembers,
} from "../controllers/membershipController";

const router = Router();

router.get("/workspaces/:workspaceId/members", listWorkspaceMembers);
router.get("/boards/:boardId/members", listBoardMembers);

export default router;
