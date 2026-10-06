import express from "express";
import healthRouter from "./routes/health";
import boardsRouter from "./routes/boards";
import membershipsRouter from "./routes/memberships";
import usersRouter from "./routes/users";
import workspacesRouter from "./routes/workspaces";

const app = express();

app.use(express.json());
app.use(healthRouter);
app.use(boardsRouter);
app.use(membershipsRouter);
app.use(usersRouter);
app.use(workspacesRouter);

export default app;
