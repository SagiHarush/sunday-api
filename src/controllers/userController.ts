import { Request, Response } from "express";
import { getUserById } from "../services/userService";
import { getRouteParam } from "./routeParams";

export function getUser(req: Request, res: Response) {
  const userId = getRouteParam(req, "userId");
  if (!userId) {
    res.status(400).json({ error: "Invalid user ID" });
    return;
  }

  const user = getUserById(userId);
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  res.status(200).json(user);
}
