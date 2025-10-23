# Cello Sports Management

## Overview

Cello Sports Management is a corporate portfolio website for a professional sports management agency based in Durban, South Africa. The application serves as a digital presence to showcase athlete representation, training programs, events, and sponsorship opportunities. The website combines athletic energy with corporate professionalism, featuring a modern design inspired by premium sports brands like Nike and Adidas.

The platform includes:
- **Home Page**: Single-page application with smooth scrolling navigation (hero, about, services, athletes, events, testimonials, gallery, contact)
- **Blog Section**: Article listings with rich content, categories, and detail views
- **Careers Page**: Job listings with detailed descriptions and email application system
- **Contact Form**: Lead generation with automated email notifications to management team
- **Analytics**: Google Analytics 4 and Meta Pixel tracking for marketing insights
- **WhatsApp Integration**: Floating chat button for instant direct communication

## Recent Changes (October 2025)

### Next-Phase Features Completed:
1. **WhatsApp Chat Integration** - Floating button in bottom-right corner opens chat with Cello Sports Management (+27718726236)
2. **Google Analytics 4 & Meta Pixel** - Privacy-compliant tracking for form submissions, WhatsApp clicks, and conversion events
3. **Blog Section** - Full blog with listing page, detail pages, categories (Insights, Event Recaps, Athlete Stories), and 3 seeded sample posts
4. **Careers Page** - 4 job postings (Sports Agent, Marketing Coordinator, Event Manager, Talent Scout) with email application system
5. **Email Notifications** - Automated ZeptoMail integration sends contact form submissions to info@, hr@, and admin@cellosports.co.za with HTML template
6. **Lekker Network Badge** - Footer includes "Lekker Network Verified Level 1" badge linking to verification page
7. **CSM Logo** - Professional logo replaced "CELLO" text branding in navigation and footer

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter for lightweight client-side routing. The application includes a home page (single-page layout with smooth scrolling), blog listing page, blog post detail pages, careers page, and 404 not-found page.

**State Management**: TanStack React Query (v5) for server state management, form handling through React Hook Form with Zod validation.

**UI Component System**: Shadcn/ui components built on Radix UI primitives. The design system uses the "new-york" style variant with a dark-mode-first approach. Components include comprehensive form elements, dialogs, cards, navigation menus, and more.

**Styling**: Tailwind CSS with custom design tokens defined in CSS variables. The color system supports both light and dark modes with HSL-based colors. Custom utilities include hover/active elevation effects and a sophisticated theming system.

**Typography**: Google Fonts integration with Montserrat for headlines (athletic presence), Inter for body text (readability), and design guidelines reference Bebas Neue for impact moments.

**Design System**: Athletic-inspired with dark backgrounds, electric blue (200 95% 55%) and vibrant green (150 80% 50%) accents. Consistent spacing using Tailwind's scale, rounded corners, and soft shadows throughout.

### Backend Architecture

**Runtime**: Node.js with Express.js server framework.

**API Pattern**: RESTful API with JSON request/response format. The server includes custom middleware for request logging and JSON body parsing with raw body capture support.

**Development Environment**: Custom Vite integration for HMR (Hot Module Replacement) in development mode. Production builds bundle the server code using esbuild.

**Session Management**: Infrastructure in place for connect-pg-simple (PostgreSQL session store), though session functionality may not be fully implemented.

### Data Layer

**Database**: PostgreSQL using Neon serverless driver (@neondatabase/serverless).

**ORM**: Drizzle ORM for type-safe database queries and schema management. Schema definitions use drizzle-zod for automatic Zod schema generation from database schemas.

**Schema**: 
- `contacts` table: Form submissions (id, name, email, phone, message, createdAt)
- `blogPosts` table: Blog articles (id, title, slug, excerpt, content, author, category, image, published)
- Additional entities (Athlete, Event, GalleryItem, Testimonial) are defined as TypeScript interfaces but not yet backed by database tables

**Storage Strategy**: Dual storage implementation with a MemStorage in-memory store (for development/testing) and infrastructure for PostgreSQL persistence. The storage interface is abstracted to allow easy switching between implementations.

**Migrations**: Drizzle Kit for database migrations stored in ./migrations directory.

### Application Structure

**Monorepo Layout**: Three main directories:
- `/client`: React frontend application with components, pages, hooks, and utilities
- `/server`: Express backend with routes and storage layer
- `/shared`: Shared TypeScript types and Zod schemas used by both client and server

**Asset Management**: Stock images stored in `/attached_assets/stock_images` and referenced through Vite's asset resolution system.

**Path Aliases**: TypeScript path mapping for clean imports:
- `@/*` → client/src
- `@shared/*` → shared
- `@assets/*` → attached_assets

### Key Architectural Decisions

**Single Page Application**: Chosen for smooth scrolling navigation and modern user experience. All sections (hero, about, services, athletes, events, testimonials, gallery, contact) are rendered on a single page with anchor-based navigation.

**Component Composition**: Shadcn/ui provides unstyled, accessible components that can be customized. This approach gives full control over styling while maintaining accessibility and reducing bundle size (only used components are included).

**Type Safety**: End-to-end TypeScript with shared schemas between client and server. Zod schemas provide runtime validation and automatic TypeScript type inference.

**Form Handling**: React Hook Form with Zod resolvers for declarative form validation. Contact form data is validated on both client and server using the same schema.

**Styling Approach**: Utility-first with Tailwind CSS. Custom design tokens defined as CSS variables allow for consistent theming and easy dark mode implementation.

**Image Strategy**: Static imports for images to benefit from Vite's optimization and cache busting. Stock images are used as placeholders for athlete photos, events, and gallery items.

**API Design**: Simple REST endpoints with conventional HTTP methods. Error handling includes Zod validation errors and generic error responses.

## External Dependencies

### Core Framework Dependencies
- **React** (react, react-dom): UI framework
- **Vite**: Build tool and development server with custom integration
- **Express**: Node.js web framework for API server
- **TypeScript**: Type system for both client and server

### Database & ORM
- **@neondatabase/serverless**: Serverless PostgreSQL client for Neon database
- **drizzle-orm**: TypeScript ORM for database operations
- **drizzle-kit**: CLI tool for migrations and schema management
- **drizzle-zod**: Automatic Zod schema generation from Drizzle schemas
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI Component Libraries
- **@radix-ui/react-***: Comprehensive set of unstyled, accessible UI primitives (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, navigation-menu, popover, select, slider, switch, tabs, toast, tooltip, etc.)
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider component
- **lucide-react**: Icon library
- **react-icons**: Additional icon set (used for Instagram icon)

### Form & Validation
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Resolvers for external validation libraries
- **zod**: Schema validation library

### Styling
- **tailwindcss**: Utility-first CSS framework
- **autoprefixer**: PostCSS plugin for vendor prefixing
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx** & **tailwind-merge**: Utility for conditional className composition

### Data Fetching & State
- **@tanstack/react-query**: Server state management and data fetching
- **wouter**: Lightweight routing library

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Replit-specific error overlay
- **@replit/vite-plugin-cartographer**: Replit development tool
- **@replit/vite-plugin-dev-banner**: Replit development banner
- **tsx**: TypeScript execution for development server

### Utilities
- **date-fns**: Date utility library
- **nanoid**: Unique ID generation

### Email Service
- **zeptomail**: Zoho's transactional email service for contact form notifications
  - 10,000 free emails per month
  - Sends automated notifications to info@, hr@, and admin@cellosports.co.za
  - HTML email templates with branded gradient header
  - Security: HTML injection protection via escapeHtml function
  - Configuration via ZEPTOMAIL_TOKEN environment variable
  - Reply-to automatically set to contact's email for easy staff responses

### Google Fonts
- **Inter**: Body text font (weights 300-800)
- **Montserrat**: Display/headline font (weights 600-900)
- **Bebas Neue**: Referenced in design guidelines for impact text

### Business Information
- **Location**: Durban Central, South Africa (Office 404, 4th Floor, DOONE HOUSE)
- **Contact**: Multiple email addresses for different departments (info, hr, admin, specific team members)
- **Social Media**: Instagram presence (@cellosportsmanagement)
- **Domain**: www.cellosports.co.za

### SEO & Analytics
- Meta tags configured for search engines and social media sharing
- Schema.org structured data for local business markup
- Open Graph and Twitter Card tags for social sharing