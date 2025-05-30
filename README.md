# DraftScripts Monorepo

A full-stack monorepo showcasing modern web development patterns with React, Vue, and Node.js. This repository demonstrates component libraries, applications, and shared utilities built with cutting-edge technologies.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![pnpm](https://img.shields.io/badge/pnpm-9.15.4+-4EC7C7.svg)](https://pnpm.io/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB.svg)](https://react.dev)
[![Vue](https://img.shields.io/badge/Vue-3.5.13-42b883.svg)](https://vuejs.org)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-000000.svg)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.3-38B2AC.svg)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-6.3.4-646CFF.svg)](https://vitejs.dev)
[![Turborepo](https://img.shields.io/badge/Turborepo-2.5.3-EF4444.svg)](https://turbo.build)

## Overview

DraftScripts is a comprehensive monorepo that includes:

- **Modern SaaS & Showcase Applications** built with Next.js 15
- **Reusable Component Libraries** for React and Vue
- **Shared Configuration Packages** for ESLint and TypeScript
- **Development Playgrounds** for quick prototyping
- **Type-safe code** with strict TypeScript configuration

## Repository Structure

```bash
draftscripts/
├── apps/
│   ├── saas/          # Next.js 15 SaaS application (React 19, TailwindCSS 4)
│   └── showcase/      # Portfolio/showcase app (Next.js 15, comprehensive features)
├── packages/
│   ├── ui/            # Shared React component library
│   ├── react/         # React component package (@draftscripts/react)
│   ├── vue/           # Vue component package (@draftscripts/vue)
│   ├── eslint-config/ # Shared ESLint configurations
│   └── typescript-config/ # Shared TypeScript configurations
├── playgrounds/
│   ├── react/         # React development playground
│   └── vue/           # Vue development playground
└── .github/
    └── copilot-instructions.md
```

## Technology Stack

### Core Technologies

- **React**: 19.1.0 (latest stable)
- **Vue**: 3.5.13 (latest stable)
- **Next.js**: 15.3.2 (app router, turbo/turbopack)
- **TypeScript**: 5.8.2+ (strict configuration)
- **TailwindCSS**: 4.1.3+ (latest with PostCSS 4)

### Build & Development Tools

- **Turborepo**: 2.5.3+ (monorepo build system)
- **pnpm**: 9.15.4 (package manager)
- **Vite**: 6.3.4+ (build tool for React/Vue packages)
- **ESLint**: 9.25.0+ (linting with flat config)
- **Prettier**: 3.5.3 (code formatting)

## Application Details

### Apps/SaaS (`apps/saas/`)

A clean Next.js 15 SaaS application template featuring:

- **Framework**: Next.js 15 with app router
- **Styling**: TailwindCSS 4 with PostCSS
- **Runtime**: React 19 with turbopack
- **Typography**: Geist font family
- **Development**: Hot reload with `--turbopack` flag

**Development Commands:**

```bash
pnpm saas          # Start saas app only
cd apps/saas && pnpm dev  # Alternative approach
```

### Apps/Showcase (`apps/showcase/`)

A comprehensive portfolio and showcase application featuring:

- **Framework**: Next.js 15 with advanced features
- **Styling**: TailwindCSS 4, Preline UI components
- **Authentication**: JWT with bcryptjs
- **Email**: EmailJS integration with reCAPTCHA
- **Themes**: Dark/light mode with next-themes
- **Loading**: NextJS TopLoader for navigation

**Key Features:**

- Portfolio sections (projects, resume, contacts)
- Authentication system (`(auth)` route group)
- API routes (`/api/google` for reCAPTCHA)
- Dashboard functionality
- Blog system
- E-commerce features (checkout, payment, pricing)
- Contact forms with validation
- Theme switching capabilities
- PWA manifest support

**Route Structure:**

```bash
app/
├── (auth)/          # Authentication routes
├── api/             # API endpoints
├── blog/            # Blog functionality
├── checkout/        # E-commerce checkout
├── dashboard/       # User dashboard
├── payment/         # Payment processing
├── portfolio/       # Portfolio sections
├── pricing/         # Pricing pages
└── resume/          # Resume/CV display
```

**Development Commands:**

```bash
pnpm showcase      # Start showcase app only
cd apps/showcase && pnpm dev  # Alternative approach
```

## Shared Packages

### UI Package (`packages/ui/`)

Shared React component library with:

- **Export Strategy**: Direct file exports (`./*` pattern)
- **Components**: Reusable React components
- **Generator**: Turbo generator for new components
- **TypeScript**: Strict type checking

**Usage:**

```typescript
import { ComponentName } from '@repo/shared';
import { AnotherComponent } from '@repo/shared/another-component';
```

**Generate New Component:**

```bash
cd packages/ui
pnpm generate:component
```

### React Package (`packages/react/`)

Standalone React component library:

- **Package**: `@draftscripts/react`
- **Build**: Vite with UMD/ES modules
- **Dependencies**: Headless UI, TailwindCSS 4
- **Styling**: TailwindCSS with Vite plugin

### Vue Package (`packages/vue/`)

Comprehensive Vue 3 component library:

- **Package**: `@draftscripts/vue`
- **Version**: 1.0.3 (published)
- **Features**: TipTap editor, dialog system, Bootstrap integration
- **Rich Text**: Complete TipTap editor with extensions
- **Build**: Vite with TypeScript and Vitest

**Key Features:**

- Dialog component system (success, error, warning, confirm)
- TipTap rich text editor with extensions
- Table editing capabilities
- Image and video embedding
- File upload support
- Mention system
- Character counting

### ESLint Config (`packages/eslint-config/`)

Shared ESLint configurations:

- **Base Config**: `base.js` with TypeScript ESLint
- **Next.js Config**: `next.js` for Next.js apps
- **React Internal**: `react-internal.js` for React components
- **Plugins**: Turbo, Prettier, Only-Warn

### TypeScript Config (`packages/typescript-config/`)

Shared TypeScript configurations:

- **Base**: `base.json` for general projects
- **Next.js**: `nextjs.json` for Next.js apps
- **React Library**: `react-library.json` for React packages

## Development Guidelines

### Getting Started

```bash
# Install dependencies
pnpm install

# Start all apps in development
pnpm dev

# Start specific app
pnpm saas
pnpm showcase

# Build all packages
pnpm build

# Lint all packages
pnpm lint

# Format code
pnpm format
```

### Workspace Commands

The repository uses Turborepo for efficient builds:

```bash
# Development (all apps)
turbo dev

# Build (with dependency graph)
turbo build

# Lint (parallel execution)
turbo lint

# Filter specific app
turbo dev --filter=saas
turbo build --filter=showcase
```

### Code Style & Standards

- **TypeScript**: Strict mode enabled across all packages
- **ESLint**: Flat config with TypeScript ESLint recommended rules
- **Prettier**: Configured with Tailwind plugin
- **Imports**: Use workspace protocols (`workspace:*`)
- **File Naming**: Kebab-case for components, camelCase for utilities

### Component Development

When creating new components:

1. **For UI Package**: Use the generator

    ```bash
    cd packages/ui && pnpm generate:component
    ```

2. **For Apps**: Follow Next.js 13+ app router conventions

    ```typescript
    // Use proper TypeScript interfaces
    interface ComponentProps {
      title: string;
      children: React.ReactNode;
    }

    export default function Component({ title, children }: ComponentProps) {
      return <div className="...">{children}</div>
    }
    ```

3. **For Vue Package**: Follow Vue 3 Composition API

    ```vue
    <script setup lang="ts">
        interface Props {
            title: string;
        }

        const props = defineProps<Props>();
    </script>
    ```

## Architecture Patterns

### Monorepo Organization

- **Apps**: Complete applications (saas, showcase)
- **Packages**: Shared libraries and configurations
- **Playgrounds**: Development environments
- **Workspaces**: pnpm workspace with Turborepo

### Component Architecture

- **Atomic Design**: Components organized by complexity
- **Prop Interfaces**: TypeScript interfaces for all props
- **Composition**: Prefer composition over inheritance
- **Reusability**: Shared components in packages/ui

### State Management

- **React**: Built-in state hooks, Context API for global state
- **Vue**: Composition API with reactive state
- **Forms**: Controlled components with validation
- **Themes**: next-themes for persistent theme state

## Security Considerations

### Authentication (Showcase App)

- **JWT Tokens**: Secure token-based auth
- **Password Hashing**: bcryptjs for password security
- **Session Management**: Proper token expiration
- **Route Protection**: Middleware for protected routes

### API Security

- **Input Validation**: Validate all API inputs
- **Rate Limiting**: Consider implementing rate limits
- **CORS**: Proper CORS configuration
- **reCAPTCHA**: Integrated for form protection

## Performance Considerations

- **Bundle Splitting**: Automatic with Next.js and Vite
- **Tree Shaking**: Proper exports for optimal bundling
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Route-based splitting
- **Caching**: Turbo cache for builds

## Deployment Guidelines

- **Vercel**: Optimized for Vercel deployment
- **Environment Variables**: Configure for each environment
- **Node.js**: Version 18+ recommended
- **pnpm**: 9.15.4+ required

## Contributing Guidelines

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
