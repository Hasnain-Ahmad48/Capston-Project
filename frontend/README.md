This template offers a minimal setup to get React running with Vite, complete with Hot Module Replacement (HMR) and basic ESLint rules.

Available Official Plugins

You can choose between two official Vite plugins for React:

@vitejs/plugin-react – Uses Babel (or oxc when used with rolldown-vite) to support Fast Refresh.

@vitejs/plugin-react-swc – Uses SWC for faster Fast Refresh performance.


React Compiler

The React Compiler is not enabled by default in this template due to its impact on development and build performance. If you want to enable it, refer to the official documentation for guidance.

Extending ESLint Configuration

For production-grade applications, we recommend using TypeScript with type-aware ESLint rules. You can explore the TypeScript template to learn how to integrate TypeScript and typescript-eslint into your project.
