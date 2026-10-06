export type MembershipRole = "admin" | "member" | "guest";
export type UserType = "internal" | "guest";
export type MembershipStatus = "active" | "inactive";

export interface Membership {
  id: string;
  workspaceId: string;
  userId: string;
  role: MembershipRole;
  userType: UserType;
  invitedBy: string | null;
  joinedAt: string;
  status: MembershipStatus;
}
