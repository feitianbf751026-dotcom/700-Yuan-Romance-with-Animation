# Project Tech and Design

This document explains how the project is structured and which parts are sensitive to change.

## Purpose
- Build an interactive visual novel with branching narrative and state-driven choices.
- Keep the runtime simple: no server is required; the story data lives in the repo.

## Architecture Overview
- `App.tsx` owns game state and routes between StartScreen and GameUI.
- `components/StartScreen.tsx` renders the intro screen and start action.
- `components/GameUI.tsx` renders the story UI and choices.
- `components/FireflyPet.tsx` renders the desktop companion and must remain on top.
- `services/llmService.ts` drives the story progression and state updates.
- `services/scenes/` contains story scenes.
- `services/pathMatcher/` handles branch routing by choice history.
- `services/stateManager/` computes and updates player state.

## Data Flow
1. StartScreen triggers `llmService.startNewGame()`.
2. The current scene is rendered in GameUI.
3. Player choices are sent to `llmService.nextTurnWithChoice()`.
4. The returned scene updates the UI and background.

## Background Images
- Scene backgrounds are built from `scene.backgroundDescription`.
- The URL is generated with a stable seed to keep images deterministic.
- Background images are preloaded and cached in memory.
- On timeout or failure, a CSS gradient fallback is used.

## UI Guardrails
- FireflyPet must stay on top of the UI (highest z-index).
- The game UI uses fixed layering; avoid adding higher z-index elements.
- Choice buttons target a minimum tap size (44px) for mobile usability.

## Tooling
- React 18 and TypeScript
- Vite build pipeline
- Tailwind CSS for styling
