# SaaS Dashboard App

A modern SaaS dashboard application built with Next.js 15, React 19, and TailwindCSS 4. This template provides a clean foundation for building SaaS applications with authentication, dashboard layouts, and premium UI components.

## Features

- **Modern Dashboard**: Clean, professional dashboard interface
- **Authentication System**: Secure JWT-based authentication with bcryptjs
- **Premium UI Components**: Preline UI integration for polished components
- **Responsive Design**: Mobile-first approach with TailwindCSS 4
- **User Management**: User registration, login, and profile management
- **Dashboard Layouts**: Multiple layout options for different dashboard views
- **Type Safety**: Full TypeScript support with strict configuration
- **Performance Optimized**: Built with Next.js 15 and Turbopack

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **React**: 19.1.0 (latest stable)
- **Styling**: TailwindCSS 4.1.3+ with PostCSS
- **UI Components**: Preline UI for professional dashboard components
- **Authentication**: JWT with bcryptjs for password hashing
- **TypeScript**: 5.8.2+ with strict configuration
- **Font**: Geist font family for optimal readability
- **Build Tool**: Turbopack for fast development

## Key Dependencies

- **@preline/ui**: Premium UI component library
- **bcryptjs**: Password hashing for secure authentication
- **jose**: JWT token handling
- **next-themes**: Theme switching capabilities
- **@headlessui/react**: Unstyled, accessible UI components
- **react-icons**: Comprehensive icon library

## Project Structure

```md
saas/
├── app/
│   ├── (auth)/             # Authentication route group
│   │   ├── login/          # Login page
│   │   └── register/       # Registration page
│   ├── dashboard/          # Dashboard pages
│   │   ├── layout.tsx      # Dashboard layout
│   │   └── page.tsx        # Main dashboard
│   ├── api/                # API routes
│   │   └── auth/           # Authentication endpoints
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── dashboard/          # Dashboard-specific components
│   └── auth/               # Authentication components
├── lib/
│   ├── auth.ts             # Authentication utilities
│   ├── db.ts               # Database configuration
│   └── utils.ts            # General utilities
└── middleware.ts           # Next.js middleware for route protection
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9.15.4+
- Database (PostgreSQL, MySQL, or SQLite)

### Development

From the repository root:

```bash
# Install dependencies
pnpm install

# Start SaaS app specifically
pnpm saas

# Or start all apps
pnpm dev
```

Alternatively, from the saas directory:

```bash
cd apps/saas
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Environment Setup

Create a `.env.local` file in the saas directory:

```env
# Database
DATABASE_URL="your_database_connection_string"

# JWT Secret
JWT_SECRET="your_jwt_secret_key"

# NextAuth (if using)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_nextauth_secret"

# API Keys (if needed)
NEXT_PUBLIC_API_URL="your_api_url"
```

### Building for Production

```bash
# From repository root
pnpm build --filter=saas

# Or from saas directory
cd apps/saas && pnpm build
```

## Key Features

### Authentication System

- **Secure Registration**: User registration with password hashing
- **JWT Authentication**: Token-based authentication system
- **Protected Routes**: Middleware for route protection
- **Session Management**: Persistent user sessions
- **Password Security**: bcryptjs for secure password hashing

### Dashboard Components

- **Sidebar Navigation**: Collapsible sidebar with navigation menu
- **Header Bar**: User profile and quick actions
- **Dashboard Widgets**: Analytics cards and data visualization
- **Tables**: Data tables with sorting and filtering
- **Forms**: Styled forms for data input
- **Modals**: Modal dialogs for actions and confirmations

### UI Components (Preline UI)

- **Buttons**: Various button styles and states
- **Cards**: Content cards with different layouts
- **Forms**: Form inputs, selects, and validation
- **Navigation**: Breadcrumbs, tabs, and menus
- **Data Display**: Tables, lists, and statistics
- **Feedback**: Alerts, toasts, and loading states

## API Routes

The app includes several API endpoints:

```md
/api/auth/
├── login              # POST - User login
├── register           # POST - User registration
├── logout             # POST - User logout
└── me                 # GET - Get current user

/api/dashboard/
├── stats              # GET - Dashboard statistics
├── users              # GET - User management
└── settings           # GET/PUT - Application settings
```

## Authentication Flow

1. **Registration**: Users register with email/password
2. **Login**: Authenticate with credentials
3. **JWT Token**: Server generates JWT token
4. **Route Protection**: Middleware validates tokens
5. **Dashboard Access**: Authenticated users access dashboard

## Customization

### Styling

- **Preline UI**: Configure component themes and variants
- **TailwindCSS**: Customize colors, spacing, and components
- **Dark Mode**: Built-in dark mode support with next-themes
- **Custom Components**: Create custom dashboard components

### Layout

- **Sidebar**: Customize navigation items and layout
- **Header**: Modify header content and actions
- **Dashboard Grid**: Adjust dashboard widget layout
- **Responsive**: Configure mobile-first responsive behavior

### Authentication

- **Providers**: Add OAuth providers (Google, GitHub, etc.)
- **Database**: Configure your preferred database
- **JWT Settings**: Adjust token expiration and security
- **Route Protection**: Customize protected route logic

## Deployment

### Vercel (Recommended)

The SaaS app is optimized for Vercel deployment:

1. Connect your repository to Vercel
2. Set the build command to: `cd ../.. && npx turbo build --filter=saas^...`
3. Set the output directory to: `apps/saas/.next`
4. Configure environment variables in Vercel dashboard
5. Set up database connection

### Environment Variables for Production

```env
DATABASE_URL="production_database_url"
JWT_SECRET="production_jwt_secret"
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="production_nextauth_secret"
```

### Database Setup

1. Set up your production database (PostgreSQL recommended)
2. Run database migrations if applicable
3. Configure connection pooling for better performance

## Security Considerations

- **Password Hashing**: bcryptjs with proper salt rounds
- **JWT Security**: Secure secret keys and token expiration
- **Input Validation**: Validate all API inputs
- **CORS Configuration**: Proper CORS setup for API endpoints
- **Environment Variables**: Secure handling of sensitive data

## Performance Features

- **Server Components**: Leverage React Server Components
- **Image Optimization**: Next.js Image component
- **Font Optimization**: Geist font with automatic optimization
- **Bundle Splitting**: Automatic code splitting
- **Caching**: API response caching where appropriate
- **Turbopack**: Fast development builds

## Contributing

This SaaS app is part of the DraftScripts monorepo. Please follow the contributing guidelines in the root README.md.

## License

This project is part of the DraftScripts monorepo and follows the same license terms.
