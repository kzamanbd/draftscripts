# Showcase App

A comprehensive showcase application built with Next.js 15, React 19, and TailwindCSS 4. This app demonstrates a full-featured portfolio website with authentication, blog functionality, e-commerce features, and contact forms.

## Features

- **Portfolio Showcase**: Complete portfolio sections with project displays
- **Blog System**: Full-featured blog with posts and categories
- **Authentication**: JWT-based authentication with bcryptjs
- **Contact Forms**: EmailJS integration with reCAPTCHA validation
- **E-commerce**: Checkout, payment, and pricing pages
- **Dashboard**: User dashboard with management features
- **Premium UI**: Preline UI components for polished design
- **Theme Support**: Dark/light mode with next-themes
- **Form Validation**: Comprehensive form validation
- **SEO Optimized**: Meta tags and structured data

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **React**: 19.1.0 (latest stable)
- **Styling**: TailwindCSS 4.1.3+ with PostCSS
- **UI Components**: Preline UI for professional components
- **Authentication**: JWT with bcryptjs and jose
- **Email**: EmailJS for contact form submissions
- **Validation**: reCAPTCHA v3 for spam protection
- **Loading**: NextJS TopLoader for navigation feedback
- **TypeScript**: 5.8.2+ with strict configuration
- **Theme**: next-themes for dark/light mode switching

## Key Dependencies

- **@emailjs/browser**: Email service integration
- **@preline/ui**: Premium UI component library
- **bcryptjs**: Password hashing for authentication
- **jose**: JWT token handling
- **next-themes**: Theme switching capabilities
- **nextjs-toploader**: Loading progress indicator
- **react-google-recaptcha-v3**: reCAPTCHA v3 integration
- **@headlessui/react**: Accessible UI components

## Project Structure

```md
showcase/
├── app/
│   ├── (auth)/             # Authentication route group
│   │   ├── login/          # Login page
│   │   └── register/       # Registration page
│   ├── api/                # API routes
│   │   ├── auth/           # Authentication endpoints
│   │   └── google/         # reCAPTCHA verification
│   ├── blog/               # Blog functionality
│   │   ├── [slug]/         # Dynamic blog post pages
│   │   └── page.tsx        # Blog listing
│   ├── checkout/           # E-commerce checkout
│   ├── dashboard/          # User dashboard
│   │   ├── layout.tsx      # Dashboard layout
│   │   └── page.tsx        # Dashboard home
│   ├── payment/            # Payment processing
│   ├── portfolio/          # Portfolio sections
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact form
│   │   ├── projects/       # Projects showcase
│   │   └── resume/         # Resume/CV
│   ├── pricing/            # Pricing pages
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── portfolio/          # Portfolio-specific components
│   ├── blog/               # Blog components
│   ├── auth/               # Authentication components
│   └── forms/              # Form components
├── lib/
│   ├── auth.ts             # Authentication utilities
│   ├── email.ts            # EmailJS configuration
│   └── utils.ts            # General utilities
├── public/
│   ├── images/             # Static images
│   └── icons/              # App icons
└── styles/
    └── globals.css         # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9.15.4+
- EmailJS account (for contact forms)
- reCAPTCHA v3 keys (for form protection)

### Development

From the repository root:

```bash
# Install dependencies
pnpm install

# Start showcase app specifically
pnpm showcase

# Or start all apps
pnpm dev
```

Alternatively, from the showcase directory:

```bash
cd apps/showcase
pnpm dev
```

The application will be available at [http://localhost:3002](http://localhost:3002).

### Environment Setup

Create a `.env.local` file in the showcase directory:

```env
# Authentication
JWT_SECRET="your_jwt_secret_key"
NEXTAUTH_URL="http://localhost:3002"
NEXTAUTH_SECRET="your_nextauth_secret"

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID="your_emailjs_service_id"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="your_emailjs_template_id"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your_emailjs_public_key"

# reCAPTCHA v3
NEXT_PUBLIC_RECAPTCHA_SITE_KEY="your_recaptcha_site_key"
RECAPTCHA_SECRET_KEY="your_recaptcha_secret_key"

# Database (if using)
DATABASE_URL="your_database_connection_string"

# API Configuration
NEXT_PUBLIC_API_URL="http://localhost:3002/api"
```

### Building for Production

```bash
# From repository root
pnpm build --filter=showcase

# Or from showcase directory
cd apps/showcase && pnpm build
```

## Key Features

### Portfolio Sections

- **About**: Personal and professional background
- **Projects**: Showcase of development projects with details
- **Resume**: Professional experience and skills
- **Contact**: Contact form with EmailJS integration

### Blog System

- **Post Management**: Create, edit, and manage blog posts
- **Categories**: Organize posts by categories
- **Dynamic Routing**: SEO-friendly URLs for posts
- **Rich Content**: Support for rich text and media

### Authentication System

- **User Registration**: Secure user registration with validation
- **Login/Logout**: JWT-based authentication
- **Protected Routes**: Middleware for route protection
- **User Dashboard**: Personalized user dashboard

### Contact Forms

- **EmailJS Integration**: Direct email sending from frontend
- **reCAPTCHA Protection**: Spam protection with reCAPTCHA v3
- **Form Validation**: Client and server-side validation
- **Success/Error Handling**: User feedback for form submissions

### E-commerce Features

- **Pricing Pages**: Service pricing and plans
- **Checkout Process**: Complete checkout workflow
- **Payment Integration**: Payment processing capabilities
- **Order Management**: Order tracking and management

## API Routes

The app includes comprehensive API endpoints:

```md
/api/auth/
├── login              # POST - User authentication
├── register           # POST - User registration
└── logout             # POST - User logout

/api/google/
└── recaptcha          # POST - reCAPTCHA verification

/api/blog/
├── posts              # GET/POST - Blog posts
└── [slug]             # GET/PUT/DELETE - Individual posts

/api/portfolio/
├── projects           # GET - Portfolio projects
└── contact            # POST - Contact form submission
```

## Email Configuration (EmailJS)

1. **Create EmailJS Account**: Sign up at [EmailJS](https://www.emailjs.com/)
2. **Create Email Service**: Set up email service (Gmail, Outlook, etc.)
3. **Create Email Template**: Design your contact form email template
4. **Get Credentials**: Copy Service ID, Template ID, and Public Key
5. **Configure Environment**: Add credentials to `.env.local`

### Example EmailJS Template

```html
Subject: New Contact from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Sent from your portfolio website.
```

## reCAPTCHA Setup

1. **Google reCAPTCHA**: Visit [reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. **Create New Site**: Add your domain
3. **Select reCAPTCHA v3**: Choose v3 for invisible protection
4. **Get Keys**: Copy Site Key and Secret Key
5. **Configure Environment**: Add keys to `.env.local`

## Deployment

### Vercel (Recommended)

The showcase app is optimized for Vercel deployment:

1. Connect your repository to Vercel
2. Set the build command to: `cd ../.. && npx turbo build --filter=showcase^...`
3. Set the output directory to: `apps/showcase/.next`
4. Configure environment variables in Vercel dashboard
5. Set up EmailJS and reCAPTCHA services

### Environment Variables for Production

```env
JWT_SECRET="production_jwt_secret"
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="production_nextauth_secret"

NEXT_PUBLIC_EMAILJS_SERVICE_ID="production_service_id"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="production_template_id"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="production_public_key"

NEXT_PUBLIC_RECAPTCHA_SITE_KEY="production_site_key"
RECAPTCHA_SECRET_KEY="production_secret_key"
```

## Contributing

This showcase app is part of the DraftScripts monorepo. Please follow the contributing guidelines in the root README.md.

## License

This project is part of the DraftScripts monorepo and follows the same license terms.
