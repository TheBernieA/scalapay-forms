/
├─ .gitignore
├─ next.config.ts
├─ package.json
├─ package-lock.json
├─ postcss.config.mjs
├─ tailwind.config.js
├─ tsconfig.json
├─ next-env.d.ts
│
├─ public/
│   └─ (static assets…)
│
├─ app/
│   ├─ layout.tsx
│   ├─ page.tsx
│   │
│   ├─ form/
│   │   └─ page.tsx
│   │
│   └─ form-success/
│   │    └─ page.tsx
│   ├─ favicon.ico
│   │
│   ├─ globals.css
│   
├─ components/
│   ├─ FormStepOne.tsx
│   └─ FormStepTwo.tsx
│
├─ shared/
│   └─ components/
│       ├─ InputField.tsx
│       ├─ SelectField.tsx
│       └─ Toggle.tsx
│
├─ interface/
│   └─ formInterface.ts
│
├─ lib/
│   └─ countries.ts
│
├─ schema/
│   └─ formSchema.ts
│
├─ store/
│   ├─ provider/                ← Redux Provider wrapper
│   │   └─ (ReduxProvider.tsx)
│   ├─ formSlice.ts
│   └─ index.ts                 ← store setup
│
├─ utils/
│   └─ index.ts                 ← validateFiscalCode.
│
└─ docs/                        ← for generated and hand-written docs
    ├─ index.html               ← TypeDoc output
    └─ architecture.md          ← folder & data-flow diagrams
