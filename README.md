# ** Multi-Step Form Project **

A Next.js application implementing a two-step user registration form with React Hook Form, Zod validation, Redux Toolkit state management, and comprehensive testing.

# Table of Contents

1. Description
2. Evaluation Criteria
3. Environment Setup
4. Installation
5. UI Implementation
6. Validation Logic
7. Code Quality
8. State Management
9. Testing
   - Unit Testing
   - E2E Testing

10. Documentation
11. Contributing
12. License

# Description

This project is a two-step registration form built with Next.js App Router, React Hook Form for form state and validation, Zod schemas for runtime checks, and Redux Toolkit to persist data across steps. After submission it redirects to a success page styled with Tailwind CSS.

# Environment Setup

## Prerequisites

Node.js >= 16.x
npm >= 8.x or Yarn

# Clone & Install

git clone `https://github.com/your-username/your-form-project.git`
cd your-form-project
npm install # or yarn install

# Installation

1. Install dependencies (`npm install`).
2. Run the dev server: npm run dev
3. Open `http://localhost:3000` in your browser.

# UI Implementation

- Uses Tailwind CSS for utility-first styling.
- Responsive form layout adapts to mobile and desktop.
- Accessible toggles with `role="switch"` and proper aria-attributes.
- Success page at `/form-success` with SVG icon and Link back to home.

# Validation Logic

- Step 1 (FormStepOne):

  - Email format via Zod
  - First/Last name: min 2 chars, letters & spaces
  - Date of birth: HTML min/max, Zod refine + date-fns age check ≥ 18
  - Fiscal code: async validateFiscalCode utility + manual error on failure

- Step 2 (FormStepTwo):
  - Street, province, city: non-empty, regex for letters
  - Number: numeric only
  - Postal code: length 4–10
  - Country: ISO code enum
  - Toggles: boolean

# Code Quality

- Component-driven: InputField, SelectField, Toggle abstract form inputs.
- TypeScript: Strong typing for props, store (RootState, AppDispatch), and Zod schemas.
- Linting & Formatting: ESLint + Prettier configured in package.json.

# State Management

- Redux Toolkit slice (formSlice.ts) holds { step, data }.
- Actions: goToStep, updateFormData, resetForm.
- Wrapped in <Provider> in app/layout.tsx via ReduxProvider.
- Components dispatch and useSelector to read step and data.

# Testing

## Unit Testing

- Jest + React Testing Library for components and hooks.
- Tests in /**tests**/ covering:
  - Input validation errors
  - Zod schemas (invalid/valid inputs)
  - Redux slice reducers and action creators

Run:

#### `npm run test`

#### `npm run test:coverage`

# E2E Testing

- Cypress tests in cypress/ simulate:
  1.  Filling Step 1 with valid/invalid data
  2.  Navigating to Step 2
  3.  Toggling checkboxes and submitting
  4.  Redirect to inital page

Run:

#### `npm run cypress:open`

# Contributing

1. Fork the repo and create a feature branch
2. Write clean, unit-tested code
3. Open a PR against main; include screenshots if UI changes
4. Ensure all CI checks pass (`npm run build`)
