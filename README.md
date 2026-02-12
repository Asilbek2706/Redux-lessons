# Redux Lessons

[![CI/CD Pipeline](https://github.com/Asilbek2706/Redux-lessons/actions/workflows/ci.yml/badge.svg)](https://github.com/Asilbek2706/Redux-lessons/actions/workflows/ci.yml)

A learning repository for Redux with React and TypeScript.

## Projects

### Redux-Init
A React + TypeScript + Vite application demonstrating Redux integration.

## CI/CD

This repository uses GitHub Actions for continuous integration and deployment:

- **Linting**: Automated code quality checks with ESLint
- **Building**: Multi-version Node.js builds (18.x, 20.x)
- **Artifacts**: Build artifacts are preserved for successful builds

## Getting Started

Navigate to the project directory:

```bash
cd Redux-Init
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run linter:

```bash
npm run lint
```

## Workflows

- **CI/CD Pipeline** (`.github/workflows/ci.yml`): Runs on push and pull requests to main branch
- **Telegram Notifications** (`.github/workflows/telegram.yml`): Sends notifications to Telegram on main branch pushes
