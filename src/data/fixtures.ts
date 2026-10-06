import { User } from "../models/user";
import { Workspace } from "../models/workspace";
import { Board } from "../models/board";
import { BoardMembership } from "../models/boardMembership";
import { Membership } from "../models/membership";

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
  {
    id: "alex-morgan",
    name: "Alex Morgan",
    email: "freelancer@example.com",
    company: "Independent",
    engagementEndedAt: "2026-04-06T00:00:00.000Z",
  },
  {
    id: "taylor-reed",
    name: "Taylor Reed",
    email: "consultant@agency.com",
    company: "Agency",
  },
  {
    id: "jamie-park",
    name: "Jamie Park",
    email: "partner@vendor.com",
    company: "Vendor",
  },
];

export const memberships: Membership[] = [
  {
    id: "membership-sarah-chen",
    workspaceId: "acme",
    userId: "sarah-chen",
    role: "admin",
    userType: "internal",
    invitedBy: null,
    joinedAt: "2023-03-15T00:00:00.000Z",
    status: "active",
  },
  {
    id: "membership-marcus-johnson",
    workspaceId: "acme",
    userId: "marcus-johnson",
    role: "member",
    userType: "internal",
    invitedBy: "sarah-chen",
    joinedAt: "2023-07-10T00:00:00.000Z",
    status: "active",
  },
  {
    id: "membership-priya-patel",
    workspaceId: "acme",
    userId: "priya-patel",
    role: "member",
    userType: "internal",
    invitedBy: "sarah-chen",
    joinedAt: "2024-01-22T00:00:00.000Z",
    status: "active",
  },
  {
    id: "membership-daniel-kim",
    workspaceId: "acme",
    userId: "daniel-kim",
    role: "member",
    userType: "internal",
    invitedBy: "sarah-chen",
    joinedAt: "2024-04-08T00:00:00.000Z",
    status: "active",
  },
  {
    id: "membership-alex-morgan",
    workspaceId: "acme",
    userId: "alex-morgan",
    role: "guest",
    userType: "guest",
    invitedBy: "sarah-chen",
    joinedAt: "2026-02-06T00:00:00.000Z",
    status: "active",
  },
  {
    id: "membership-taylor-reed",
    workspaceId: "acme",
    userId: "taylor-reed",
    role: "guest",
    userType: "guest",
    invitedBy: "marcus-johnson",
    joinedAt: "2026-06-02T00:00:00.000Z",
    status: "active",
  },
  {
    id: "membership-jamie-park",
    workspaceId: "acme",
    userId: "jamie-park",
    role: "guest",
    userType: "guest",
    invitedBy: "sarah-chen",
    joinedAt: "2026-08-18T00:00:00.000Z",
    status: "active",
  },
];

export const boards: Board[] = [
  {
    id: "product-roadmap",
    workspaceId: "acme",
    name: "Product Roadmap",
    description: "Quarterly product planning and delivery.",
  },
  {
    id: "marketing-campaigns",
    workspaceId: "acme",
    name: "Marketing Campaigns",
    description: "Campaign planning, creative reviews, and launch tracking.",
  },
  {
    id: "client-onboarding",
    workspaceId: "acme",
    name: "Client Onboarding",
    description: "Shared onboarding plans for customer engagements.",
  },
];

export const boardMemberships: BoardMembership[] = [
  { boardId: "product-roadmap", userId: "sarah-chen", accessLevel: "admin" },
  { boardId: "product-roadmap", userId: "marcus-johnson", accessLevel: "edit" },
  { boardId: "product-roadmap", userId: "priya-patel", accessLevel: "edit" },
  { boardId: "product-roadmap", userId: "daniel-kim", accessLevel: "view" },
  { boardId: "marketing-campaigns", userId: "sarah-chen", accessLevel: "admin" },
  { boardId: "marketing-campaigns", userId: "priya-patel", accessLevel: "edit" },
  { boardId: "marketing-campaigns", userId: "taylor-reed", accessLevel: "edit" },
  { boardId: "client-onboarding", userId: "sarah-chen", accessLevel: "admin" },
  { boardId: "client-onboarding", userId: "marcus-johnson", accessLevel: "edit" },
  { boardId: "client-onboarding", userId: "alex-morgan", accessLevel: "edit" },
  { boardId: "client-onboarding", userId: "jamie-park", accessLevel: "view" },
];
