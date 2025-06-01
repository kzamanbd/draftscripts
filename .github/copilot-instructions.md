# DraftScripts Monorepo - GitHub Copilot Instructions

## Project Overview

DraftScripts is a full-stack monorepo showcasing modern web development patterns with React, Vue, and Node.js. This repository demonstrates component libraries, applications, and shared utilities built with cutting-edge technologies.

**Repository Structure:**

```
draftscripts/
├── apps/
│   ├── portfolio/     # Personal portfolio app (Next.js 15, React 19, TailwindCSS 4)
│   ├── saas/          # Next.js 15 SaaS application (React 19, TailwindCSS 4, JWT auth)
│   └── showcase/      # Feature showcase app (Next.js 15, comprehensive features)
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

- **React**: 19.0.0 (latest stable)
- **Vue**: 3.5.13 (latest stable)
- **Next.js**: 15.3.2 (app router, turbo/turbopack)
- **TypeScript**: 5.5.4+ (strict configuration)
- **TailwindCSS**: 4.1.3+ (latest with PostCSS 4)

### Build & Development Tools

- **Turborepo**: 2.5.3+ (monorepo build system)
- **pnpm**: 10.11.0 (package manager)
- **Vite**: 6.3.4+ (build tool for React/Vue packages)
- **ESLint**: 9.25.0+ (linting with flat config)
- **Prettier**: 3.5.3 (code formatting)

### Key Dependencies

- **@headlessui/react**: 2.2.2+ (unstyled UI components)
- **@tiptap/**: Rich text editor components (Vue package)
- **react-icons**: 5.2.1+ (icon library)
- **next-themes**: 0.4.6+ (theme switching)
- **@emailjs/browser**: 4.4.1+ (email integration)
- **react-toastify**: 10.0.5+ (toast notifications)
- **body-scroll-lock**: 4.0.0-beta.0 (scroll management)

## Application Details

### Apps/Portfolio (`apps/portfolio/`)

A clean personal portfolio application featuring:

- **Framework**: Next.js 15 with app router
- **Styling**: TailwindCSS 4 with PostCSS
- **Runtime**: React 19 with turbopack
- **Email**: EmailJS integration for contact forms
- **Icons**: React Icons library
- **Development**: Hot reload with `--turbopack` and HTTPS support

**Key Features:**

- Modern Next.js app router structure
- TailwindCSS 4 integration
- Shared UI components from `@repo/shared`
- TypeScript strict mode
- ESLint with flat config
- Contact form with EmailJS
- Resume/CV display functionality
- PWA manifest support
- Project showcase with reusable ProjectCard components
- HTTPS development support with certificates

**Development Commands:**

```bash
pnpm portfolio        # Start portfolio app only
cd apps/portfolio && pnpm dev  # Alternative approach
cd apps/portfolio && pnpm dev:https  # HTTPS development
```

### Apps/SaaS (`apps/saas/`)

A comprehensive SaaS application featuring:

- **Framework**: Next.js 15 with app router
- **Styling**: TailwindCSS 4 with PostCSS and @tailwindcss/forms
- **Runtime**: React 19 with turbopack
- **Authentication**: JWT with bcryptjs and jose
- **UI Components**: Preline UI integration
- **Development**: Hot reload with `--turbopack` flag

**Key Features:**

- Modern Next.js app router structure
- JWT-based authentication system
- TailwindCSS 4 integration with forms plugin
- Preline UI component library
- Shared UI components from `@repo/shared`
- TypeScript strict mode
- ESLint with flat config
- Middleware for route protection

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
- **UI Components**: @headlessui/react for accessibility

**Key Features:**

- Portfolio sections (projects, resume, contacts)
- API routes (`/api/google` for reCAPTCHA)
- Blog system
- E-commerce features (checkout, payment, pricing)
- Contact forms with validation
- Theme switching capabilities
- PWA manifest support
- Body scroll lock functionality

**Route Structure:**

```
app/
├── api/             # API endpoints
├── blog/            # Blog functionality
├── checkout/        # E-commerce checkout
├── payment/         # Payment processing
├── portfolio/       # Portfolio sections
└── page.tsx         # Main landing page
```

**Development Commands:**

```bash
pnpm showcase      # Start showcase app only
cd apps/showcase && pnpm dev  # Alternative approach
```

## Shared Packages

### Shared Package (`packages/shared/`)

Shared React component library with:

- **Export Strategy**: Direct file exports (`./*` pattern)
- **Components**: Reusable React components
- **Generator**: Turbo generator for new components
- **TypeScript**: Strict type checking

**Usage:**

```typescript
import { ComponentName } from '@repo/shared';
import { AnotherComponent } from '@repo/shared/utils';
```

**Generate New Component:**

```bash
cd packages/shared
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

## Playgrounds

### React Playground (`playgrounds/react/`)

Development environment for React components:

- **Package**: Local react playground
- **Framework**: Vite with React 19
- **Styling**: TailwindCSS 4 with Vite plugin
- **Dependencies**: Uses `@draftscripts/react` workspace package
- **TypeScript**: Full TypeScript support

### Vue Playground (`playgrounds/vue/`)

Development environment for Vue components:

- **Package**: vue-playground
- **Framework**: Vite with Vue 3.4+
- **Styling**: TailwindCSS 4 with PostCSS
- **Dependencies**: Uses `@draftscripts/vue` workspace package
- **Linting**: ESLint with Vue plugin

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
pnpm portfolio
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

1. **For Shared Package**: Use the generator

    ```bash
    cd packages/shared && pnpm generate:component
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

### Styling Guidelines

- **TailwindCSS 4**: Use latest features and PostCSS integration
- **Component Classes**: Prefer utility classes over custom CSS
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Use `next-themes` for theme switching
- **Color Palette**: Consistent color system across apps

### API Development

For showcase app API routes:

- **Structure**: Follow Next.js 13+ app router API conventions
- **Type Safety**: Use TypeScript for request/response types
- **Error Handling**: Consistent error response format
- **Authentication**: JWT-based with proper validation

Example API route:

```typescript
// app/api/example/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // Process request
        return NextResponse.json({ success: true, data: result });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Error message' }, { status: 500 });
    }
}
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

### Performance Considerations

- **Bundle Splitting**: Automatic with Next.js and Vite
- **Tree Shaking**: Proper exports for optimal bundling
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Route-based splitting
- **Caching**: Turbo cache for builds

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

### Environment Variables

- **Client Side**: `NEXT_PUBLIC_` prefix for browser exposure
- **Server Side**: Server-only variables without prefix
- **Validation**: Validate required env vars at startup

## Testing Strategy

### Unit Testing

- **Vitest**: Configured for Vue package
- **React Testing**: Consider @testing-library/react
- **Component Testing**: Test component behavior and props

### Type Safety

- **TypeScript**: Strict mode across all packages
- **Type Checking**: `pnpm check-types` command
- **Interface Definitions**: Comprehensive type definitions

## Deployment Guidelines

### Build Process

```bash
# Production build
pnpm build

# Type checking
pnpm lint
```

### Environment Setup

- **Node.js**: Version 18+ recommended
- **pnpm**: 10.11.0+ required
- **Environment Variables**: Configure for each environment

### Vercel Deployment (Recommended)

All three apps are optimized for Vercel deployment:

- **portfolio**: Standard Next.js deployment with EmailJS
- **saas**: Next.js with JWT authentication
- **showcase**: Next.js with API routes and env vars

## Contributing Guidelines

### Branch Strategy

- **main**: Production-ready code
- **develop**: Development integration
- **feature/\***: Feature development
- **fix/\***: Bug fixes

### Commit Conventions

- Use conventional commits
- Include scope when relevant: `feat(ui): add new button component`
- Reference issues when applicable

### Pull Request Process

1. Create feature branch from develop
2. Implement changes with tests
3. Update documentation if needed
4. Submit PR with clear description
5. Ensure CI passes before merge

## IDE Configuration

### VS Code Settings

Recommended extensions:

- **TypeScript**: Built-in TypeScript support
- **ESLint**: ESLint extension
- **Prettier**: Prettier extension
- **Tailwind CSS IntelliSense**: TailwindCSS support
- **Vue Language Features (Volar)**: Vue 3 support

### Settings.json

```json
{
    "typescript.preferences.preferTypeOnlyAutoImports": true,
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "tailwindCSS.experimental.configFile": "tailwind.config.ts"
}
```

## Troubleshooting

### Common Issues

1. **pnpm Installation**: Use pnpm 10.11.0+ for workspace support
2. **TypeScript Errors**: Check tsconfig inheritance
3. **Build Failures**: Clear Turbo cache with `turbo prune`
4. **Styling Issues**: Verify TailwindCSS 4 configuration

### Debug Commands

```bash
# Clear all caches
rm -rf node_modules .turbo dist
pnpm install

# Verbose build output
turbo build --verbose

# Check workspace dependencies
pnpm list --recursive
```

### Performance Debugging

- Use Turbo cache for faster builds
- Enable Next.js bundle analyzer when needed
- Monitor package bundle sizes

## Resources

### Documentation Links

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Vue 3 Documentation](https://vuejs.org)
- [TailwindCSS 4 Documentation](https://tailwindcss.com)
- [Turborepo Documentation](https://turbo.build/docs)

### Package Documentation

- [Headless UI](https://headlessui.com)
- [TipTap Editor](https://tiptap.dev)
- [React Icons](https://react-icons.github.io/react-icons)
- [EmailJS](https://www.emailjs.com)

This monorepo demonstrates modern full-stack development patterns with a focus on developer experience, type safety, and performance optimization.

