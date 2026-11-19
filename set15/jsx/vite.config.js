import { defineConfig } from 'vite';

// Use React's automatic JSX runtime so App.jsx works without `import React`.
export default defineConfig({
  esbuild: { jsx: 'automatic' },
});
