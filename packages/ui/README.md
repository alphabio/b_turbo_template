# UI Components

Shared React UI components for the monorepo.

## Components

### Button

A reusable button component with multiple variants and sizes.

```tsx
import { Button } from '@b-turbo-template/ui';

function App() {
  return (
    <div>
      <Button variant="primary" size="md" onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
      <Button variant="secondary" size="lg">
        Secondary Button
      </Button>
      <Button variant="danger" size="sm" disabled>
        Disabled Button
      </Button>
    </div>
  );
}
```

## Development

```bash
npm run build    # Build the package
npm run dev      # Watch mode for development
npm run clean    # Clean build artifacts
```
