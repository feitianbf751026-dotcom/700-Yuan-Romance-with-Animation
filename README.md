# 700 Yuan Romance

A single-page interactive visual novel built with React and TypeScript. The story is a branching narrative with state-driven choices, cinematic UI, and dynamic background images.

## Features
- Branching story with multiple endings
- State-driven choice gating (affection, courage, honesty, etc.)
- Dynamic background images generated from scene descriptions
- Typewriter dialogue and cinematic UI layers
- Firefly desktop companion (FireflyPet) rendered above the game UI

## Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure
- `App.tsx` - App shell and game flow
- `components/` - StartScreen, GameUI, FireflyPet, TypingText
- `services/` - Story logic, scenes, path matching, and state manager
- `types.ts` - Shared types
- `docs/` - Design notes, audits, plans, and reports

## Notes
- Background images are generated from scene descriptions via Pollinations and cached in memory.
- The story content and branching logic live in `services/` (no backend required).
