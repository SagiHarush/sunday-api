import { User } from "../models/user";
import { Workspace } from "../models/workspace";

export const workspaces: Workspace[] = [
  {
    id: "acme",
    name: "Acme",
    domain: "acme.com",
  },
];

export const users: User[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    email: "sarah@acme.com",
    company: "Acme",
  },
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    email: "marcus@acme.com",
    company: "Acme",
  },
  {
    id: "priya-patel",
    name: "Priya Patel",
    email: "priya@acme.com",
    company: "Acme",
  },
  {
    id: "daniel-kim",
    name: "Daniel Kim",
    email: "daniel@acme.com",
    company: "Acme",
  },
];
