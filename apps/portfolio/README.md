# Portfolio App

A modern personal portfolio application built with Next.js 15, React 19, and TailwindCSS 4. This app showcases professional experience, projects, and skills in a clean, responsive design with PWA support.

## Features

- **Responsive Design**: Mobile-first approach with TailwindCSS 4
- **Resume Generation**: Dynamic PDF resume generation
- **PWA Support**: Progressive Web App with manifest and service worker
- **Social Integration**: Links to social media and professional profiles
- **Skills Showcase**: Interactive display of technical skills and expertise
- **Code Visualization**: Syntax-highlighted code snippets
- **Modern UI**: Clean, professional design with smooth animations
- **Performance Optimized**: Built with Next.js 15 and Turbopack

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **React**: 19.1.0 (latest stable)
- **Styling**: TailwindCSS 4.1.3+ with PostCSS
- **TypeScript**: 5.8.2+ with strict configuration
- **Font**: Geist font family for optimal readability
- **Build Tool**: Turbopack for fast development
- **PWA**: Service worker and web app manifest

## Project Structure

```md
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── resume/             # Resume section
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   └── sections/           # Page sections
├── lib/                    # Utilities and configurations
├── public/
│   ├── manifest.json       # PWA manifest
│   └── icons/              # App icons and favicons
└── tailwind.config.ts      # TailwindCSS configuration
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9.15.4+

### Development

From the repository root:

```bash
# Install dependencies
pnpm install

# Start portfolio app specifically
pnpm portfolio

# Or start all apps
pnpm dev
```

Alternatively, from the portfolio directory:

```bash
cd apps/portfolio
pnpm dev
```

The application will be available at [http://localhost:3001](http://localhost:3001).

### Building for Production

```bash
# From repository root
pnpm build --filter=portfolio

# Or from portfolio directory
cd apps/portfolio && pnpm build
```

## Key Components

- **Hero Section**: Introduction and call-to-action
- **About**: Professional summary and background
- **Skills**: Technical expertise visualization
- **Experience**: Work history and achievements
- **Portfolio**: Project showcase with descriptions
- **Contact**: Professional contact information

## Environment Variables

Create a `.env.local` file in the portfolio directory:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Contact information
NEXT_PUBLIC_EMAIL=your_email@example.com
NEXT_PUBLIC_PHONE=your_phone_number
```

## PWA Configuration

The app includes PWA support with:

- Web app manifest (`public/manifest.json`)
- Service worker for offline functionality
- App icons for various devices
- Theme color configuration

## Deployment

### Vercel (Recommended)

The portfolio app is optimized for Vercel deployment:

1. Connect your repository to Vercel
2. Set the build command to: `cd ../.. && npx turbo build --filter=portfolio^...`
3. Set the output directory to: `apps/portfolio/.next`
4. Configure environment variables in Vercel dashboard

### Other Platforms

For other deployment platforms, build the app using:

```bash
pnpm build
```

The output will be in the `.next` directory and can be deployed to any Node.js hosting platform.

## Customization

### Styling

- Edit `tailwind.config.ts` for theme customization
- Modify component styles in the respective component files
- Update global styles in `app/globals.css`

### Content

- Update personal information in component files
- Replace placeholder images in the `public` directory
- Modify resume data in the resume section components

### PWA Settings

- Update `public/manifest.json` for app metadata
- Replace icons in `public/icons/` directory
- Configure service worker settings if needed

## Performance Features

- **Image Optimization**: Next.js Image component
- **Font Optimization**: Geist font with automatic optimization
- **Bundle Splitting**: Automatic code splitting
- **Static Generation**: Pre-rendered pages for optimal performance
- **Turbopack**: Fast development builds

## Contributing

This portfolio app is part of the DraftScripts monorepo. Please follow the contributing guidelines in the root README.md.

## License

This project is part of the DraftScripts monorepo and follows the same license terms.
