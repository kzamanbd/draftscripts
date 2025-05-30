# DraftScripts Monorepo

A full-stack monorepo showcasing modern web development patterns with React, Vue, and Node.js. This repository demonstrates component libraries, applications, and shared utilities built with cutting-edge technologies.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![pnpm](https://img.shields.io/badge/pnpm-10.2.0+-4EC7C7.svg)](https://pnpm.io/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB.svg)](https://react.dev)
[![Vue](https://img.shields.io/badge/Vue-3.4.21-42b883.svg)](https://vuejs.org)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-000000.svg)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.7-38B2AC.svg)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-6.3.1-646CFF.svg)](https://vitejs.dev)
[![Turborepo](https://img.shields.io/badge/Turborepo-2.5.3-EF4444.svg)](https://turbo.build)

## Overview

DraftScripts is a comprehensive monorepo that includes:

- **Modern Portfolio, SaaS & Showcase Applications** built with Next.js 15
- **Reusable Component Libraries** for React and Vue
- **Shared Configuration Packages** for ESLint and TypeScript
- **Development Playgrounds** for quick prototyping
- **Type-safe code** with strict TypeScript configuration

## Repository Structure

```bash
draftscripts/
├── apps/
│   ├── portfolio/     # Personal portfolio app (Next.js 15, React 19)
│   ├── saas/          # Next.js 15 SaaS application (React 19, TailwindCSS 4)
│   └── showcase/      # Comprehensive showcase app (Next.js 15, advanced features)
├── packages/
│   ├── shared/        # Shared React component library (@repo/shared)
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
- **Vue**: 3.4.21 (latest stable)
- **Next.js**: 15.3.2 (app router, turbo/turbopack)
- **TypeScript**: 5.8.2+ (strict configuration)
- **TailwindCSS**: 4.1.7+ (latest with PostCSS 4)

### Build & Development Tools

- **Turborepo**: 2.5.3+ (monorepo build system)
- **pnpm**: 10.2.0 (package manager)
- **Vite**: 6.3.1+ (build tool for React/Vue packages)
- **ESLint**: 9.25.0+ (linting with flat config)
- **Prettier**: 3.5.3 (code formatting)

## Application Details

### Apps/Portfolio (`apps/portfolio/`)

A clean personal portfolio application featuring:

- **Framework**: Next.js 15 with app router
- **Styling**: TailwindCSS 4 with PostCSS
- **Runtime**: React 19 with turbopack
- **Icons**: React Icons library
- **Features**: Resume display, HTTPS development support, PWA manifest

**Development Commands:**

```bash
pnpm portfolio       # Start portfolio app only
pnpm portfolio:https # Start with HTTPS for local development
cd apps/portfolio && pnpm dev  # Alternative approach
```

### Apps/SaaS (`apps/saas/`)

A clean Next.js 15 SaaS application template featuring:

- **Framework**: Next.js 15 with app router
- **Styling**: TailwindCSS 4 with PostCSS
- **Runtime**: React 19 with turbopack
- **UI Components**: Preline UI integration
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

### Shared Package (`packages/shared/`)

Shared React component library with:

- **Package**: `@repo/shared` (workspace-internal)
- **Export Strategy**: Direct file exports (`./*` pattern)
- **Components**: Reusable React components (Button, Card, Code, etc.)
- **Generator**: Turbo generator for new components
- **TypeScript**: Strict type checking

**Key Components:**

- ApplicationLogo, GlowCard, LoadingSpinner
- ThemeProviders and ThemeSwitch
- OtherLoginOption for authentication
- Tailwind CSS integration

**Usage:**

```typescript
import { ComponentName } from '@repo/shared';
import { AnotherComponent } from '@repo/shared/another-component';
```

**Generate New Component:**

```bash
cd packages/shared
pnpm generate:component
```

### React Package (`packages/react/`)

Standalone React component library:

- **Package**: `@draftscripts/react`
- **Version**: 1.0.0
- **Build**: Vite with UMD/ES modules
- **Dependencies**: Headless UI, TailwindCSS 4
- **Styling**: TailwindCSS with Vite plugin

**Key Features:**

- Dialog system with useConfirm hook
- Success, error, warning, and confirmation dialogs
- Headless UI integration
- TypeScript support with strict types

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

# Start specific apps
pnpm portfolio      # Personal portfolio app
pnpm saas          # SaaS application
pnpm showcase      # Comprehensive showcase app

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

# Filter specific apps
turbo dev --filter=portfolio
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

1. **For Shared Package**: Use the generator

    ```bash
    cd packages/shared && pnpm generate:component
    ```

2. **For Apps**: Follow Next.js 15+ app router conventions

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

- **Apps**: Complete applications (portfolio, saas, showcase)
- **Packages**: Shared libraries and configurations
- **Playgrounds**: Development environments
- **Workspaces**: pnpm workspace with Turborepo

### Component Architecture

- **Atomic Design**: Components organized by complexity
- **Prop Interfaces**: TypeScript interfaces for all props
- **Composition**: Prefer composition over inheritance
- **Reusability**: Shared components in packages/shared

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
