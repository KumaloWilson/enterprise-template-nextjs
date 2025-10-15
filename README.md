<div align="center">

# 🚀 Enterprise App Template

**A production-ready, modular enterprise application template built with Next.js 15, TypeScript, and modern best practices.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

[Features](#-features) • [Screenshots](#-screenshots) • [Getting Started](#-getting-started) • [Architecture](#-architecture) • [Documentation](#-documentation)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Architecture](#-architecture)
- [Module Pattern](#-module-pattern)
- [Available Scripts](#-available-scripts)
- [Tech Stack](#-tech-stack)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

This enterprise app template provides a **scalable, maintainable foundation** for building large-scale applications. It follows industry best practices with a modular architecture that separates concerns and promotes code reusability.

**Perfect for:**
- SaaS applications
- Admin dashboards
- Internal tools
- Enterprise web applications
- Multi-tenant platforms

---

## ✨ Features

### 🏗️ Architecture
- **Modular Design** – Clean separation with `modules/` folder structure
- **Type-Safe** – Full TypeScript support with strict mode
- **Scalable** – Built to handle growth from MVP to enterprise scale
- **Maintainable** – Clear patterns and conventions for team collaboration

### 🔐 Authentication
- Complete auth flow (Login, Register, Forgot Password)
- Protected routes with middleware
- Session management with React Context
- Form validation and error handling

### 🎨 UI/UX
- **Responsive Design** – Mobile-first approach
- **Dark Mode** – Built-in theme switching
- **Modern Components** – shadcn/ui component library
- **Collapsible Sidebar** – Intuitive navigation for complex apps
- **Beautiful Dashboard** – Charts, metrics, and data visualization

### 📊 Dashboard Features
- Real-time metrics and KPIs
- Interactive charts (Area, Bar, Line)
- Transaction history
- Activity tracking
- Responsive grid layout

### 🛠️ Developer Experience
- Hot reload and fast refresh
- ESLint and Prettier configured
- TypeScript path aliases
- Consistent code structure
- Comprehensive documentation

---

## 🖼️ Screenshots

### Authentication Flow
<div align="center">

| Login Screen | Register Screen | Forgot Password |
|:------------:|:---------------:|:---------------:|
| ![Login](https://blob.v0.app/892d76fc-f950-4bda-a23f-b75bdd5f5284) | ![Register](https://blob.v0.app/31af6c87-251d-4dbf-9ddd-fa9df7c3d340) | ![Forgot Password](https://blob.v0.app/bf07f2cd-fb89-4b40-9ed5-0e7e9569d22b) |

*Clean, modern authentication screens with form validation and error handling*

</div>

### Main Application
<div align="center">

| Dashboard | Users Management | Settings |
|:---------:|:----------------:|:--------:|
| ![Dashboard](https://blob.v0.app/abb38b3a-77cd-4bd8-b705-112a3a599f7c) | ![Users](https://blob.v0.app/31af6c87-251d-4dbf-9ddd-fa9df7c3d340) | ![Settings](https://blob.v0.app/bf07f2cd-fb89-4b40-9ed5-0e7e9569d22b) |

*Feature-rich dashboard with charts, user management, and comprehensive settings*

</div>

---

## 📂 Project Structure

\`\`\`
enterprise-app-template/
├── app/                          # Next.js App Router
│   ├── (app)/                   # Protected app routes
│   │   ├── layout.tsx           # App layout with sidebar
│   │   ├── dashboard/           # Dashboard page
│   │   ├── users/               # Users management
│   │   ├── settings/            # Settings page
│   │   ├── analytics/           # Analytics page
│   │   ├── calendar/            # Calendar page
│   │   ├── chat/                # Chat page
│   │   └── ...                  # Other pages
│   ├── auth/                    # Authentication routes
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
│
├── modules/                      # Feature modules
│   ├── auth/                    # Authentication module
│   │   ├── components/          # Auth-specific components
│   │   ├── services/            # Auth API services
│   │   ├── state/               # Auth state management
│   │   ├── types/               # Auth TypeScript types
│   │   └── screen/              # Auth screen layouts
│   │
│   ├── dashboard/               # Dashboard module
│   │   ├── components/          # Dashboard components
│   │   ├── services/            # Dashboard services
│   │   ├── types/               # Dashboard types
│   │   └── screen/              # Dashboard screens
│   │
│   ├── users/                   # Users module
│   │   ├── components/          # User components
│   │   ├── services/            # User services
│   │   ├── types/               # User types
│   │   └── screen/              # User screens
│   │
│   └── settings/                # Settings module
│       ├── components/          # Settings components
│       ├── types/               # Settings types
│       └── screen/              # Settings screens
│
├── components/                   # Shared components
│   ├── ui/                      # shadcn/ui components
│   ├── app-sidebar.tsx          # Main sidebar navigation
│   ├── app-header.tsx           # App header
│   └── theme-provider.tsx       # Theme context provider
│
├── lib/                         # Utilities and helpers
│   ├── navigation.ts            # Navigation configuration
│   └── utils.ts                 # Utility functions
│
└── public/                      # Static assets
\`\`\`

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/enterprise-app-template.git
   cd enterprise-app-template
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### First Steps

1. **Explore the authentication flow** at `/auth/login`
2. **View the dashboard** at `/dashboard`
3. **Check out the modular structure** in the `modules/` folder
4. **Customize the theme** in `app/globals.css`

---

## 🏛️ Architecture

### Design Principles

1. **Separation of Concerns** – Each module handles its own logic
2. **Single Responsibility** – Components do one thing well
3. **DRY (Don't Repeat Yourself)** – Reusable components and utilities
4. **Type Safety** – TypeScript for catching errors early
5. **Scalability** – Easy to add new features without breaking existing code

### Key Patterns

- **Module Pattern** – Feature-based organization
- **Service Layer** – API calls separated from components
- **Context API** – Global state management
- **Compound Components** – Flexible, composable UI
- **Custom Hooks** – Reusable logic extraction

---

## 🧩 Module Pattern

Each module follows a consistent structure:

\`\`\`
modules/[module-name]/
├── components/          # Module-specific components
├── services/           # API calls and data fetching
├── state/              # State management (Context, hooks)
├── types/              # TypeScript interfaces and types
└── screen/             # Page-level components
\`\`\`

### Creating a New Module

1. **Create the module folder**
   \`\`\`bash
   mkdir -p modules/my-feature/{components,services,state,types,screen}
   \`\`\`

2. **Define types**
   \`\`\`typescript
   // modules/my-feature/types/index.ts
   export interface MyFeature {
     id: string;
     name: string;
     // ... other fields
   }
   \`\`\`

3. **Create services**
   \`\`\`typescript
   // modules/my-feature/services/my-feature-service.ts
   export const myFeatureService = {
     getAll: async () => { /* ... */ },
     getById: async (id: string) => { /* ... */ },
     // ... other methods
   }
   \`\`\`

4. **Build components**
   \`\`\`tsx
   // modules/my-feature/components/my-component.tsx
   export function MyComponent() {
     // Component logic
   }
   \`\`\`

5. **Create screen**
   \`\`\`tsx
   // modules/my-feature/screen/my-feature-screen.tsx
   export function MyFeatureScreen() {
     // Screen composition
   }
   \`\`\`

6. **Add route**
   \`\`\`tsx
   // app/(app)/my-feature/page.tsx
   import { MyFeatureScreen } from '@/modules/my-feature/screen/my-feature-screen'
   
   export default function MyFeaturePage() {
     return <MyFeatureScreen />
   }
   \`\`\`

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler check |

---

## 🛠️ Tech Stack

### Core
- **[Next.js 15](https://nextjs.org/)** – React framework with App Router
- **[React 18](https://react.dev/)** – UI library
- **[TypeScript](https://www.typescriptlang.org/)** – Type safety

### Styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** – Utility-first CSS
- **[shadcn/ui](https://ui.shadcn.com/)** – Component library
- **[Radix UI](https://www.radix-ui.com/)** – Unstyled, accessible components
- **[Lucide Icons](https://lucide.dev/)** – Icon library

### Data Visualization
- **[Recharts](https://recharts.org/)** – Chart library

### State Management
- **React Context API** – Global state
- **React Hooks** – Local state and effects

### Development
- **ESLint** – Code linting
- **Prettier** – Code formatting
- **TypeScript** – Static type checking

---

## 🎨 Customization

### Theme

Edit `app/globals.css` to customize colors:

\`\`\`css
@theme inline {
  /* Light mode colors */
  --color-background: 0 0% 100%;
  --color-foreground: 222.2 84% 4.9%;
  --color-primary: 346.8 77.2% 49.8%;
  
  /* Dark mode colors */
  .dark {
    --color-background: 222.2 84% 4.9%;
    --color-foreground: 210 40% 98%;
  }
}
\`\`\`

### Navigation

Edit `lib/navigation.ts` to add/remove sidebar items:

\`\`\`typescript
export const navigationItems = [
  {
    title: "My New Page",
    href: "/my-new-page",
    icon: MyIcon,
  },
  // ... other items
]
\`\`\`

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [shadcn](https://twitter.com/shadcn) for the beautiful component library
- [Vercel](https://vercel.com/) for hosting and deployment platform

---

## 📧 Support

For support, email support@example.com or open an issue on GitHub.

---

<div align="center">

**[⬆ back to top](#-enterprise-app-template)**

Made with ❤️ by [Your Name](https://github.com/yourusername)

</div>
