/
├─ .gitignore
├─ next.config.ts
├─ package.json
├─ package-lock.json
├─ postcss.config.mjs
├─ tailwind.config.js
├─ jest.config.ts
├─ jest.setup.ts
├─ tsconfig.json
├─ next-env.d.ts
├─ eslint.config.mjs
├─ cypress.config.ts
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
│   
├─ __test__/
│   ├─ FormStepOne.test.tsx
│   └─ FormStepTwo.test.tsx
│
│
├─ cypress/
│   ├─ e2e/
│   │   ├─ multi
│   │   
│   │   
│   ├─ fixtures/
│   ├─ support/
│
├─ shared/
│   └─ components/
│       ├─ InputField.tsx
│       ├─ Button.tsx
│       ├─ DatePicker.tsx
│       ├─ Dropdown.tsx
│       ├─ Header.tsx
│       ├─ Wrapper.tsx
│       ├─ FormHeader.tsx
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
├─ styles/
│   ├─ toggle.css
│
│
├─ types/
│   ├─ forms/types.ts
│   ├─ jest.setup.d.ts
│   
│
├─ store/
│   ├─ provider/                ← Redux Provider wrapper
│   │   └─ (ReduxProvider.tsx)
│   ├─ formSlice.ts
│   └─ index.ts                 ← store setup
│
├─ utils/
│   ├─ test-helpers.tsx
│   └─ index.ts                 ← validateFiscalCode.
│
└─ docs/                        
    └─ architecture.md          ← folder & data-flow diagrams
