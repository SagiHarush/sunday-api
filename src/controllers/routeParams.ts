import { Request } from "express";

export function getRouteParam(req: Request, name: string): string | undefined {
  const value = req.params[name];
  return typeof value === "string" && value.length > 0 ? value : undefined;
}
