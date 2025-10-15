# Enterprise App Template

A production-ready enterprise application template built with Next.js, TypeScript, and modern best practices.

## Features

- **Modular Architecture**: Clean separation of concerns with modules containing types, services, state, components, and screens
- **Authentication Flow**: Complete auth system with login, register, and password reset
- **Responsive Sidebar**: Collapsible navigation with multiple sections
- **Modern Dashboard**: Beautiful charts and metrics with real-time data
- **TypeScript**: Full type safety across the application
- **Tailwind CSS**: Utility-first styling with custom theme
- **Dark Mode**: Built-in theme switching
- **Enterprise-Grade**: Scalable patterns and best practices

## Project Structure

\`\`\`
├── app/
│   ├── (app)/              # Protected app routes
│   │   ├── dashboard/
│   │   ├── users/
│   │   ├── settings/
│   │   └── layout.tsx      # App layout with sidebar
│   ├── auth/               # Authentication routes
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   └── layout.tsx          # Root layout
├── modules/
│   ├── auth/               # Authentication module
│   │   ├── components/
│   │   ├── screen/
│   │   ├── services/
│   │   ├── state/
│   │   └── types/
│   ├── dashboard/          # Dashboard module
│   │   ├── components/
│   │   ├── screen/
│   │   ├── services/
│   │   └── types/
│   ├── users/              # Users module
│   └── settings/           # Settings module
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── app-sidebar.tsx
│   └── app-header.tsx
└── lib/
    ├── utils.ts
    └── navigation.ts
\`\`\`

## Module Pattern

Each module follows this structure:

- **types/**: TypeScript interfaces and types
- **services/**: API calls and business logic
- **state/**: State management (Context, hooks)
- **components/**: Reusable UI components
- **screen/**: Page-level components

## Getting Started

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Open [http://localhost:3000](http://localhost:3000)

## Authentication

The template includes a mock authentication system. To integrate with a real backend:

1. Update `modules/auth/services/auth-service.ts` with your API endpoints
2. Replace localStorage with secure token storage
3. Implement proper session management

## Adding New Modules

To add a new module:

1. Create a new directory in `modules/`
2. Add the standard folders: `types/`, `services/`, `components/`, `screen/`
3. Create your types in `types/index.ts`
4. Implement services in `services/`
5. Build components and screens
6. Add routes in `app/(app)/`

## Customization

### Theme

Edit `app/globals.css` to customize colors and design tokens.

### Navigation

Update `lib/navigation.ts` to add or modify sidebar items.

### Layout

Modify `components/app-sidebar.tsx` and `components/app-header.tsx` for layout changes.

## Best Practices

- Keep modules independent and reusable
- Use TypeScript for type safety
- Follow the service layer pattern for API calls
- Implement proper error handling
- Use React Context for global state
- Keep components small and focused

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React

## License

MIT
