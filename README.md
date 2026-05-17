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

## 3. Past Events Timeline Configuration
The **Past Events** timeline automatically discovers and displays images from folders located at `apps/web/src/assets/events/`.

To add a new event to the timeline:
1. Create a new folder inside `apps/web/src/assets/events/`.
2. Add your `.jpg`, `.jpeg`, or `.png` images into this new folder.

### Folder Naming Scheme
The timeline extracts the event **Name**, **Month**, and **Year** automatically from the folder's name based on words separated by underscores (`_`).

*   **Year**: If the folder name contains a 4-digit number (e.g., `2025`), it is parsed as the event year.
*   **Month**: If it contains an English month name or its 3-letter abbreviation (e.g., `oct` or `october`), it is parsed as the event month.
*   **Name**: All remaining text in the folder name is capitalized and combined to form the event name.

**Examples:**
*   `nov_2018` → **November 2018** (Year: 2018, Month: November)
*   `durga_pujo_oct_2025` → **Durga Pujo 2025** (Year: 2025, Month: October)
*   `saraswati_puja_2026` → **Saraswati Puja 2026** (Year: 2026, Month: Unknown)

## 4. Hero Section Upcoming Event Slider
The **Hero** section displays an automatic looping slider showcasing:
1. The **Goddess Durga illustration** (displays for **2 seconds**).
2. The **Upcoming Event Flyer & Logistics Card** (displays for **5 seconds**), displaying the event's name, schedules, timings, and highlighted bullets, alongside a clickable venue link pointing directly to Google Maps.

### How to Change the Upcoming Event Flyer Image
To update the flyer displayed on the second slide:
1. Place your new image file in the public directory: `apps/web/public/` (e.g., `my_new_flyer.jpg`).
2. Open `apps/web/src/components/Hero.jsx` and update the `src` path for the second entry in the `heroImages` array around line 15:
   ```javascript
   const heroImages = [
     { src: '/durga.jpg', alt: 'Goddess Durga illustration' },
     { src: '/my_new_flyer.jpg', alt: 'Upcoming Event Details' }
   ];
   ```
