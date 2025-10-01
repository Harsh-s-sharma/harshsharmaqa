# Deployment Guide

This project is configured for deployment on Netlify using GitHub integration.

## Prerequisites

1. A GitHub repository with this code
2. A Netlify account
3. Firebase project (optional, for full functionality)

## Deployment Steps

### 1. GitHub Setup

1. Push your code to a GitHub repository
2. Ensure all files are committed and pushed

### 2. Netlify Deployment

1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Choose GitHub and select your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `20.19.5`

### 3. Environment Variables (Optional)

If you want to use Firebase functionality, add these environment variables in Netlify:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

### 4. Build Configuration

The project includes:
- `netlify.toml` - Netlify configuration
- `next.config.ts` - Next.js configuration
- Build scripts that handle admin pages properly

### 5. Features

- ✅ Static site generation for marketing pages
- ✅ Dynamic admin panel (client-side only)
- ✅ Firebase integration (with fallback)
- ✅ Responsive design
- ✅ SEO optimized

## Local Development

1. Install dependencies: `npm install`
2. Create `.env.local` with your Firebase config (see `env.example`)
3. Run development server: `npm run dev`
4. Run admin functions: `npm run genkit:dev`

## Build Process

The build process:
1. Compiles TypeScript
2. Handles Firebase configuration gracefully
3. Generates static pages for marketing content
4. Creates dynamic routes for admin functionality
5. Optimizes for production

## Troubleshooting

- If build fails, check Firebase environment variables
- Admin pages require authentication in production
- Static pages work without Firebase configuration
