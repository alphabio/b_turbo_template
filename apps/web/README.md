# Web Application

Example web application using shared UI components.

## Setup

This is a placeholder for your web application. You can use:

- **Next.js**: `npx create-next-app@latest .`
- **Vite**: `npm create vite@latest .`
- **Create React App**: `npx create-react-app .`

## Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Lint the code
npm run test     # Run tests
```

## Using Shared Packages

```tsx
import { Button } from '@b-turbo-template/ui';

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Web App</h1>
      <Button variant="primary" onClick={() => alert('Hello!')}>
        Click Me
      </Button>
    </main>
  );
}
```
