# StayScape - Vacation Rental Marketplace

![StayScape](https://imgix.cosmicjs.com/7fcc1af0-cdb6-11f0-8729-d509e104938b-photo-1613490493576-7fde63acd811-1764484415477.jpg?w=1200&h=400&fit=crop&auto=format,compress)

A modern Airbnb-inspired vacation rental marketplace built with Next.js 16 and Cosmic CMS. Discover unique accommodations from cozy cabins to beachfront villas.

## Features

- 🏠 Browse vacation rentals with beautiful image galleries
- 🏷️ Filter by categories (Beachfront, Cabins, Mountain Retreats, etc.)
- 🔍 Search and filter by property type, price, and amenities
- 👤 View detailed host profiles with superhost badges
- 📱 Fully responsive design for all devices
- ⚡ Server-side rendering for fast performance
- 🖼️ Optimized images with imgix integration

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=692be485f85dc40dc2d8daf3&clone_repository=692be6d2f85dc40dc2d8db15)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create an airbnb clone"

### Code Generation Prompt

> "Based on the content model I created for 'Create an airbnb clone', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [Cosmic](https://www.cosmicjs.com) - Headless CMS for content management
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the vacation rental content model

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd stayscape
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Cosmic SDK Examples

### Fetching Listings
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: listings } = await cosmic.objects
  .find({ type: 'listings' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Listing
```typescript
const { object: listing } = await cosmic.objects
  .findOne({ type: 'listings', slug: 'property-slug' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Categories
```typescript
const { objects: categories } = await cosmic.objects
  .find({ type: 'categories' })
  .props(['id', 'title', 'slug', 'metadata'])
```

## Cosmic CMS Integration

This application uses three content types from your Cosmic bucket:

### Listings
Properties with details including:
- Property name, description, city, country
- Price per night, property type
- Bedrooms, bathrooms, max guests
- Featured image and photo gallery
- Amenities (checkboxes)
- Connected category and host

### Categories
Property categories like Beachfront, Cabins, etc. with:
- Name, icon image, description

### Hosts
Host profiles with:
- Name, photo, bio
- Superhost status (boolean)
- Response rate

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Project Settings
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import the project in Netlify
3. Add environment variables in Site Settings
4. Deploy with build command: `bun run build`

<!-- README_END -->