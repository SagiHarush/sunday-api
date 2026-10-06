# Sunday API

**Purpose:** Core workspace, membership and board APIs for Sunday.  
**Owner:** Identity & Workspace Team  
**Lifecycle:** Production  
**Consumers:** `sunday-web`

## Getting started

Requirements: Node.js 20.19 or later and npm.

```bash
npm install
npm run dev
```

The service listens on port `3000` by default. Copy `.env.example` to `.env` and set `PORT` to choose a different port.

## npm commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the API with automatic reload |
| `npm run typecheck` | Run the TypeScript type checker |
| `npm test` | Run the Vitest API tests |
| `npm run build` | Compile the service to `dist/` |
| `npm start` | Run the compiled service |

## API

All endpoints return JSON. Resource lookups return `404` with an `error` message when the requested resource does not exist; invalid path parameters return `400`.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/health` | Service health |
| `GET` | `/workspaces` | List workspaces |
| `GET` | `/workspaces/:workspaceId` | Get a workspace |
| `GET` | `/workspaces/:workspaceId/members` | List workspace members and their user records |
| `GET` | `/workspaces/:workspaceId/boards` | List boards in a workspace |
| `GET` | `/boards/:boardId` | Get a board |
| `GET` | `/boards/:boardId/members` | List board members and access levels |
| `GET` | `/users/:userId` | Get a user |

## Architecture

The Express application in `src/app.ts` composes route modules, which delegate request handling to controllers. Controllers call small services that read the in-memory fixtures in `src/data/`; the fixture records implement the interfaces in `src/models/`. `src/server.ts` starts the HTTP listener, while tests import the app directly to exercise the API without opening a network port.

## Project structure

```text
src/
  app.ts
  server.ts
  controllers/
  data/
  models/
  routes/
  services/
tests/
.github/
  CODEOWNERS
  workflows/
```

## Testing

Run `npm test` for the API integration suite. The CI workflow also runs type checking, tests, and the production build on pushes and pull requests.
