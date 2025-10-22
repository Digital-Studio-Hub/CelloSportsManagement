# Cello Sports Management - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium sports brands (Nike, Adidas) and modern sports platforms, combined with corporate professionalism. The design balances athletic energy with business credibility.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Deep Black: 0 0% 8% (backgrounds, text)
- Pure White: 0 0% 98% (text on dark, cards)
- Steel Silver: 210 20% 88% (accents, borders)

**Accent Colors:**
- Electric Blue: 200 95% 55% (primary CTAs, highlights)
- Vibrant Green: 150 80% 50% (secondary accents, success states)

**Dark Mode**: Primary implementation with dark backgrounds and bright accent pops.

### B. Typography
**Font Stack**: Google Fonts
- **Headlines**: Montserrat (700-800 weight) - Bold, athletic presence
- **Body**: Inter (400-600 weight) - Clean, professional readability
- **Accents**: Bebas Neue for impact moments (ALL CAPS sparingly)

**Sizes**:
- Hero: text-5xl to text-7xl
- Section Headers: text-3xl to text-4xl
- Body: text-base to text-lg
- Captions: text-sm

### C. Layout System
**Spacing**: Tailwind units of 4, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24
- Component spacing: gap-8 to gap-12
- Container max-width: max-w-7xl

**Grid Structure**: 12-column responsive grid with strategic breakpoints

### D. Component Library

**Navigation**:
- Sticky header with blur backdrop (backdrop-blur-lg)
- Desktop: Horizontal menu with hover underline animations
- Mobile: Slide-in menu with smooth transitions
- CTA button (Electric Blue) in header

**Hero Section**:
- Full-width (100vh) video background OR high-impact sports action image
- Centered headline with gradient text effect (blue to green)
- Dual CTAs: Primary ("Get Representation") + Secondary ("Learn More")
- Scroll indicator animation

**Service Cards**:
- Grid layout (3 columns desktop, 1 mobile)
- Glass-morphism effect with subtle borders
- Lucide icons (24px) with Electric Blue accent
- Hover: lift effect (transform scale) with shadow increase

**Athlete Portfolio Cards**:
- 2-3 column masonry grid
- Image overlay with gradient fade to black at bottom
- Name, sport, team displayed on hover/tap
- Lightbox modal for detailed profiles

**Event Showcase**:
- Horizontal scroll carousel on mobile
- 2-column grid on desktop
- Event posters with date badges
- "Learn More" links with arrow icons

**Testimonials**:
- Carousel with 3 visible cards on desktop
- Profile image (circular) + quote + name/title
- Navigation dots (Electric Blue active state)

**Contact Form**:
- 2-column layout: Form (left) + Map/Info (right)
- Input fields with subtle borders, focus state (Electric Blue glow)
- Large submit button with loading state animation

**Footer**:
- 4-column layout: Logo/tagline, Quick Links, Services, Contact
- Social media icons (Instagram prominent)
- Subtle top border with gradient

### E. Animations
**Micro-interactions** (Framer Motion):
- Scroll-triggered fade-in and slide-up for sections (stagger children)
- Card hover: scale(1.02) with shadow expansion
- Button hover: subtle scale and brightness increase
- Image parallax on scroll (hero and featured sections)

**Critical**: Keep animations subtle and performant - no distracting motion

## Images Section

### Image Placement Strategy:

**Hero Section**: 
- Large full-width background video (15-20s loop) OR high-resolution action image
- Content: Athletes in motion, stadium atmosphere, team celebration
- Overlay: Dark gradient (60% opacity) for text readability
- Format: .webp, optimized for fast loading

**About Section**:
- Team photo (Siphelele & Seymour) - professional yet approachable
- Office/workspace shots showing brand environment
- 2-column layout with images on right

**Services Section**:
- Icon-based (Lucide) with optional background patterns
- Subtle sports textures or geometric shapes

**Athletes Portfolio**:
- High-quality athlete action shots (.webp)
- Minimum 6-8 featured athletes with profile images
- Gallery lightbox for additional images/videos

**Events & Highlights**:
- Event posters, action shots from managed events
- Before/after event comparison images
- Photo galleries (6-12 images per event)

**Testimonials**:
- Circular profile photos of athletes/partners (80px diameter)

**Gallery Section**:
- Masonry grid with 15-20 curated images
- Mix of events, athletes, behind-the-scenes moments
- Lightbox preview with smooth transitions

**Contact Section**:
- Google Maps embed showing office location
- Optional: Office exterior/interior photo for credibility

### Image Specifications:
- Format: .webp for all images
- Hero: 1920x1080 minimum
- Athletes: 800x1000 (portrait orientation)
- Events: 1200x800 (landscape)
- Lazy loading for performance
- Alt tags for SEO

## Content Strategy

**Headlines**: Power words - "Empowering Athletes. Building Futures."
**CTAs**: Action-oriented - "Get Representation", "Partner With Us", "Join Our Team"
**Tone**: Professional yet passionate, motivational without being cheesy

## SEO & Performance

- Meta titles with target keywords (Sports Management Durban)
- Schema.org LocalBusiness markup
- Open Graph images (1200x630)
- Lazy load images/videos
- Mobile-first responsive breakpoints
- Fast load times (<3s)

## Special Features

- WhatsApp chat button (floating, bottom-right, Vibrant Green)
- Instagram feed integration (optional)
- Form notifications to multiple emails
- Career page with open positions
- Blog section for event recaps

**Critical**: Every section must feel complete and purposeful. This is a premium sports agency - the design must exude professionalism, energy, and trust.