# Eclypse - Premium Clothing Store

![Eclypse Banner](https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg)

Eclypse is a modern e-commerce platform for premium clothing, built with React, TypeScript, and Express. The application features a sleek, minimalist design focused on showcasing high-end fashion products.

## Project Overview

This project is a full-stack web application with:
- **Frontend**: React 19, TypeScript, Framer Motion for animations, TailwindCSS 4 for styling
- **Backend**: Express.js, Node.js
- **State Management**: React useState/useEffect hooks
- **Deployment**: Backend on Render, Frontend on Vercel

## Features

### User Experience
- **Interactive Product Browsing**: Elegant hero section and lookbook showcase
- **Dynamic Animations**: Smooth transitions and hover effects using Framer Motion
- **Responsive Design**: Fully optimized for mobile, tablet and desktop devices
- **Dark Mode UI**: Sleek black-based theme highlighting product imagery

### Shopping Features
- **Product Detail Pages**: High-quality image display with comprehensive product information
- **Size Selection**: Interactive size selector with visual feedback
- **Accordion Information Sections**: Expandable product details including size & fit, delivery and manufacturing
- **Testimonial Carousel**: Customer reviews with smooth transitions

### Cart & Checkout Process
- **Cart Management**: Add products with selected sizes to cart
- **Order Summary**: Detailed breakdown of costs including product price, shipping and taxes
- **Multi-step Checkout**: Two-phase checkout process:
  - Shipping information collection with form validation
  - Payment method selection with secure processing
- **Order Confirmation**: Success confirmation with animation

### UI Component Library
- **Custom Input Components**: OTP input with keyboard navigation and clipboard support
- **Grid Pattern Generator**: Customizable background patterns
- **Card Hover Effects**: Interactive cards with motion feedback
- **Spotlight Effect**: Dynamic spotlight following cursor movement
- **Text Generation Animation**: Typewriter-style text animation
- **Responsive Navigation**: Mobile-friendly navigation with animated menu

## Technology Stack

### Frontend
- **Framework**: React 19 with TypeScript
- **Styling**: TailwindCSS 4 with custom configuration
- **Animations**: Framer Motion for transitions and interactions
- **Build Tool**: Vite 6 for fast development and optimized production builds
- **Component Library**: Custom UI components with Aceternity UI inspiration
- **HTTP Client**: Native fetch API with custom wrapper

### Backend
- **Server**: Express.js with TypeScript
- **API**: RESTful API design with JSON responses
- **CORS Support**: Cross-Origin Resource Sharing enabled
- **Data Storage**: In-memory storage (expandable to database)

## Project Structure

```
/project
├── frontend            # React frontend application
│   ├── public          # Static assets
│   ├── src             # Source code
│   │   ├── components  # React components
│   │   │   ├── ui      # UI components
│   │   │   │   ├── aceternity  # Custom UI components (Aceternity inspired)
│   │   │   ├── cart            # Cart related components
│   │   │   ├── checkout        # Checkout flow components
│   │   │   └── ...             # Other components
│   │   ├── lib         # Utility functions and API
│   │   │   ├── api.ts  # API client functions
│   │   │   └── utils.ts # Utility functions
│   │   ├── App.tsx     # Main application component
│   │   ├── main.tsx    # Application entry point
│   │   └── index.css   # Global styles
│   ├── index.html      # HTML entry point
│   ├── tsconfig.json   # TypeScript configuration
│   ├── vite.config.ts  # Vite configuration
│   └── package.json    # Dependencies and scripts
│
└── backend             # Express backend application
    ├── src             # Source code
    │   └── index.ts    # Server entry point
    ├── dist            # Compiled JavaScript
    ├── tsconfig.json   # TypeScript configuration
    └── package.json    # Dependencies and scripts
```

## Frontend Setup

### Key Components

#### Core Pages
- **App.tsx**: Main application component with routing logic
- **Hero.tsx**: Landing page hero section with featured product
- **LookbookShowcase.tsx**: Grid layout of product collections
- **ProductPage.tsx**: Detailed product information page
- **CartPage.tsx**: Shopping cart page with item details
- **CheckoutPage.tsx**: Two-step checkout process

#### UI Components
- **Navigation.tsx**: Responsive navigation header
- **Footer.tsx**: Site footer with links and contact information
- **ProductDetails.tsx**: Product information display with size selection
- **ProductInfo.tsx**: Accordion sections with additional product details
- **Testimonial.tsx**: Customer testimonial carousel

#### Aceternity UI Components
- **input-otp.tsx**: One-time password input with advanced features
- **grid-pattern.tsx**: Customizable grid background pattern generator
- **card-hover-effect.tsx**: Interactive card components with hover animations
- **spotlight.tsx**: Dynamic spotlight effect following cursor
- **text-generate-effect.tsx**: Typewriter text animation effect

## Backend

The backend serves as a simple API providing:
- Product data retrieval
- Order processing

## Styling Approach

The project uses TailwindCSS 4 with:
- Dark mode as the primary theme
- Custom color variables for consistent styling
- Responsive design for all screen sizes
- Animation utilities for interactive elements

## Future Improvements

- User authentication and account management
- Product filtering and search functionality
- Persistent shopping cart
- Database integration for product and order storage
- Payment gateway integration
- Admin dashboard for product management

