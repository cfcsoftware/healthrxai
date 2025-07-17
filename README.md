# healthrxai
HealthRx AI - Hospital Management System - Saas - AI enabled 


- High Level Frontend Diagram

healthrx/
├── .devcontainer/
├── dist/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── common/
│   │   └── layout/
│   │       ├── SaasSidebar.tsx
│   │       ├── TenantSidebar.tsx
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   │
│   ├── features/
│   │   └── hooks/
│   │       ├── useAuth.tsx
│   │       └── useScrollAnimation.ts
│   │
│   ├── layouts/
│   │   ├── SaasLayout.tsx
│   │   └── TenantLayout.tsx
│   │
│   ├── lib/
│   │   └── axios.ts
│   │
│   ├── pages/
│   │   ├── landing/
│   │   ├── saas/
│   │   │   ├── auth/Login.tsx
│   │   │   └── dashboard/Dashboard.tsx
│   │   └── tenant/
│   │       ├── auth/Login.tsx
│   │       └── dashboard/Dashboard.tsx
│   │
│   ├── routes/
│   │   ├── AppRouter.tsx
│   │   ├── SaasRoutes.tsx
│   │   └── TenantRoutes.tsx
│   │
│   ├── services/
│   │   └── authService.tsx
│   │
│   ├── store/
│   │   ├── useTenantStore.ts
│   │   └── useTheme.ts
│   │
│   ├── types/
│   │
│   ├── utils/
│   │   ├── getTenant.ts
│   │   ├── types.ts
│   │   └── ...
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   ├── router.tsx
│   └── vite-env.d.ts
│
├── .gitignore
├── bash.sh
├── container.txt
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts


