# Project Structure

This project is structured as an npm workspace (monorepo), currently containing a single web application located in the `apps/web` directory. It relies heavily on modern frontend tools and a robust UI component system.

## 1. Root Workspace
*   **Package Manager**: Managed by `npm` workspaces.
*   **Scripts**: Uses `concurrently` in the root `package.json` to orchestrate commands (dev, build, lint, start) across the workspace apps.
*   **Directory Structure**: The main codebase lives under `apps/`.

## 2. The Web Application (`apps/web`)
This is a modern **React 18** application bundled with **Vite**. 

**Core Technologies & Libraries:**
*   **Styling & UI**: 
    *   **Tailwind CSS** for utility-first styling.
    *   **shadcn/ui** (indicated by `components.json` and dependencies) built on top of **Radix UI** headless primitives.
    *   **Framer Motion** for animations.
    *   **Lucide React** for iconography.
    *   **Recharts** for charting and data visualization.
*   **Routing**: Uses `react-router-dom` for client-side navigation.
*   **Forms & Validation**: Implements `react-hook-form` along with `zod` for schema validation.
*   **State Management/Hooks**: Uses standard React hooks and custom hooks (located in `src/hooks`).

**Key Directories inside `apps/web`:**
*   **`src/`**: The main source code directory.
    *   `components/`: Contains reusable React components (likely housing your shadcn/ui components).
    *   `pages/`: Contains the route-level page components.
    *   `lib/`: Usually contains utility functions, API clients, or shared logic.
    *   `hooks/`: Custom React hooks.
*   **`plugins/`**: Contains specialized custom Vite plugins that hint at the app's advanced capabilities:
    *   `visual-editor/` & `selection-mode/`: Suggests the app has some form of integrated visual editing features.
    *   `vite-plugin-pocketbase-auth.js`: Indicates integration with **PocketBase** as the backend/authentication service.
    *   `vite-plugin-iframe-route-restoration.js`: Likely handles routing state within an iframe environment.
*   **`tools/`**: Contains utility scripts for project maintenance:
    *   `install-missing-components.js`: A script likely used to auto-install shadcn/ui components.
    *   `generate-llms.js`: Suggests some integration or documentation generation related to Large Language Models.
*   **`public/`**: Static assets served directly by Vite.
