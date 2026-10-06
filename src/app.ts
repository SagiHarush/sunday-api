import express from "express";
import healthRouter from "./routes/health";
import workspacesRouter from "./routes/workspaces";

const app = express();

app.use(express.json());
app.use(healthRouter);
app.use(workspacesRouter);

export default app;
