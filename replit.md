# Overview

This is a professional paintless dent repair (PDR) business website for Dents Master Franchise, a company operating in Central Florida that offers both PDR services and training programs. The application is built as a modern full-stack web application using React for the frontend and Express.js for the backend, with a focus on lead generation and customer acquisition.

The website serves two primary business functions: attracting customers who need dent repair services (particularly hail damage) and recruiting students for PDR training courses. It features multiple contact forms, before/after galleries, service descriptions, and comprehensive training program information.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side application is built with React 18 using TypeScript and Vite as the build tool. The architecture follows a component-based design pattern with:

- **Routing**: Wouter for lightweight client-side routing with pages for Home, Services, Training, About, and Contact
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming

The frontend uses a modern component architecture with reusable UI components, custom hooks for analytics and mobile detection, and a centralized query client for API communication.

## Backend Architecture
The server-side application uses Express.js with TypeScript in ESM module format. Key architectural decisions include:

- **API Design**: RESTful API endpoints for contact form submissions and data retrieval
- **Validation**: Zod schemas shared between frontend and backend for consistent validation
- **Storage Strategy**: In-memory storage implementation with an interface-based design that allows for easy migration to database storage
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development Setup**: Vite integration for development with middleware mode for seamless full-stack development

## Data Storage Solutions
Currently implements an in-memory storage system using Map data structures for:

- **Contact Submissions**: Storing lead information with metadata like UTM parameters for marketing attribution
- **User Management**: Basic user storage (prepared for future authentication features)

The storage layer uses an interface-based design (`IStorage`) that abstracts the storage implementation, making it easy to swap to PostgreSQL with Drizzle ORM when needed. The database schema is already defined using Drizzle with PostgreSQL dialect.

## Authentication and Authorization
The application currently has minimal authentication infrastructure in place, with user schemas defined but not actively used. The contact form system operates without authentication, focusing on lead capture rather than user management.

## External Dependencies

### Database and ORM
- **Drizzle ORM**: Type-safe SQL toolkit configured for PostgreSQL
- **Neon Database**: Serverless PostgreSQL database (configured but not actively used in current memory storage)
- **Database Migrations**: Drizzle Kit for schema management and migrations

### UI and Styling
- **Radix UI**: Headless UI primitives for accessible component foundation
- **Tailwind CSS**: Utility-first CSS framework with custom theming
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Custom font stack including Montserrat, Inter, and specialized fonts

### Development and Analytics
- **Google Analytics 4**: Website analytics and conversion tracking with custom event tracking
- **Vite**: Build tool and development server with HMR support
- **TypeScript**: Type safety across the entire application stack
- **PostCSS**: CSS processing with autoprefixer

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation shared between client and server
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

The application is designed for easy deployment and scaling, with environment-based configuration for analytics and database connections. The modular architecture supports future enhancements like user authentication, payment processing for training programs, and advanced lead management features.