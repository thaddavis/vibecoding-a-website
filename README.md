# Haitian Mike's Auto Repair Website

A modern, animated, and high-converting landing page for Haitian Mike's Auto Repair showcasing key services, testimonials, and contact information.

## Tech Stack

- **Frontend**: React with Next.js
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## Features

- Responsive design that works on all devices
- Smooth animations and transitions using Framer Motion
- Dynamic testimonials carousel with detailed view
- Prominent contact section with click-to-call functionality
- Smooth scroll navigation

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd haitian-mikes-auto-repair
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

- `src/app/components/` - React components
- `src/app/data/` - Mock data for services and testimonials
- `src/app/types/` - TypeScript type definitions
- `public/` - Static assets like images

## Key Components

- **LandingPage**: Main component that brings everything together
- **Navigation**: Smooth scrolling navigation
- **ServicesSection**: Highlights key auto repair services
- **TestimonialsCarousel**: Dynamic carousel with customer testimonials
- **TestimonialDetail**: Modal view for detailed testimonials
- **ContactSection**: Contact information with click-to-call functionality

## Customization

- Update services in `src/app/data/services.ts`
- Update testimonials in `src/app/data/testimonials.ts`
- Modify styling using Tailwind CSS classes
- Replace placeholder images in the `public` directory with actual images

## Deployment

The easiest way to deploy this website is using Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy

## License

[MIT](LICENSE)
