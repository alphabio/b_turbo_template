# API Server

Example Node.js API server.

## Setup

This is a basic HTTP server example. You can replace it with:

- **Express**: `npm install express @types/express`
- **Fastify**: `npm install fastify`
- **NestJS**: `npx @nestjs/cli new .`

## Development

```bash
npm run build    # Build TypeScript to JavaScript
npm run start    # Start the server
npm run dev      # Start in watch mode (configure nodemon/ts-node-dev)
```

## Endpoints

- `GET /health` - Health check endpoint
- `GET /api/hello` - Example API endpoint

## Example Usage

```bash
# Health check
curl http://localhost:3001/health

# API endpoint
curl http://localhost:3001/api/hello
```

## Adding Express

```bash
npm install express @types/express
```

Then update `src/index.ts`:

```typescript
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```
