import request from "supertest";
import { describe, expect, it } from "vitest";
import app from "../src/app";

describe("Sunday API", () => {
  it("reports service health", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });

  it("returns the Acme workspace", async () => {
    const response = await request(app).get("/workspaces/acme");

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: "acme",
      name: "Acme",
      domain: "acme.com",
    });
  });

  it("includes active guest users in workspace memberships", async () => {
    const response = await request(app).get("/workspaces/acme/members");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          userType: "guest",
          status: "active",
          user: expect.objectContaining({
            name: "Alex Morgan",
            email: "freelancer@example.com",
          }),
        }),
      ]),
    );
  });

  it("returns 404 for an unknown workspace", async () => {
    const response = await request(app).get("/workspaces/unknown");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: "Workspace not found" });
  });

  it("returns board members with their access levels", async () => {
    const response = await request(app).get("/boards/client-onboarding/members");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          userId: "alex-morgan",
          accessLevel: "edit",
          user: expect.objectContaining({ name: "Alex Morgan" }),
        }),
      ]),
    );
  });
});
