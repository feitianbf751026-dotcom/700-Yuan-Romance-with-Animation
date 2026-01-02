# Project Overview

Last updated: 2025-01-27

This directory contains project overview documentation. For a quick start guide, see the root [`README.md`](../../README.md).

## Key Documents

- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Directory structure and file organization
- **[CONFIGURATION.md](./CONFIGURATION.md)** - Build and deployment configuration
- **[PROJECT_TECH_AND_DESIGN.md](./PROJECT_TECH_AND_DESIGN.md)** - Architecture and implementation details
- **[DOCUMENT_INDEX.md](./DOCUMENT_INDEX.md)** - Full documentation index

## Project Summary

**700 Yuan Romance** is a single-page interactive visual novel built with React and TypeScript. The game features:

- **Branching narrative**: Three main branches (A, B, C) with multiple endings
- **State-driven choices**: Player choices affect game state (affection, courage, honesty, intimacy)
- **Dynamic backgrounds**: Scene descriptions generate background images via Pollinations API
- **Cinematic UI**: Typewriter dialogue, fade transitions, and layered UI components
- **Desktop companion**: FireflyPet animation component rendered above game UI

## Tech Stack

- **React 18** + **TypeScript** - UI framework and type safety
- **Vite 5** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** + **Autoprefixer** - CSS processing

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Deploy to Surge.sh
cd dist && surge . 700-yuan-romance.surge.sh
```

## Project Structure

```
.
├── index.html              # HTML entry point
├── index.tsx               # React entry point
├── App.tsx                 # Main app component
├── components/             # React components
├── services/               # Core game logic
│   ├── llmService.ts      # Main game service
│   ├── scenes/            # Scene definitions
│   ├── pathMatcher/       # Path matching logic
│   └── stateManager/      # State calculations
├── styles/                 # CSS styles
├── public/                 # Static assets
└── docs/                   # Documentation
```

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed structure documentation.
