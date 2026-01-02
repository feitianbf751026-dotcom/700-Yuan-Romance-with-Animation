# 700 Yuan Romance

Last updated: 2025-01-27

A single-page interactive visual novel built with React and TypeScript. The story is a branching narrative with state-driven choices, cinematic UI, and dynamic background images.

## Features

- Branching story with multiple endings (3 main branches: A, B, C)
- State-driven choice gating (affection, courage, honesty, intimacy, etc.)
- Dynamic background images generated from scene descriptions
- Typewriter dialogue and cinematic UI layers
- Firefly desktop companion (FireflyPet) rendered above the game UI

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- PostCSS + Autoprefixer

## Getting Started

### Installation

```bash
npm install
```

### Local Development

Run the dev server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
npm run build
```

This will:
1. Run TypeScript type checking (`tsc`)
2. Build the production bundle with Vite (`vite build`)
3. Output to `dist/` directory

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Live Site

**线上地址：** https://700-yuan-romance.surge.sh/

**部署平台：** Surge.sh

### Deploy to Surge.sh

To deploy or update the live site:

```bash
# 1. Build the project
npm run build

# 2. Deploy to Surge.sh
cd dist
surge . 700-yuan-romance.surge.sh
```

**Note:** You need to have Surge CLI installed and authenticated:
```bash
npm install -g surge
surge login
```

**重新部署步骤：**
1. 确保代码已提交到 Git（可选，但推荐）
2. 运行 `npm run build` 构建项目
3. 进入 `dist` 目录：`cd dist`
4. 运行 `surge . 700-yuan-romance.surge.sh` 部署
5. 部署完成后，访问 https://700-yuan-romance.surge.sh/ 验证

### Alternative: Deploy to Vercel

The project includes `vercel.json` configuration. You can deploy to Vercel by:

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel` in the project root
3. Follow the prompts

## Project Structure

```
.
├── index.html              # HTML entry point
├── index.tsx               # React entry point (mounts App)
├── App.tsx                 # Main app component (game flow & state)
├── components/             # React components
│   ├── StartScreen.tsx     # Game start screen
│   ├── GameUI.tsx         # Main game UI (scene display)
│   ├── FireflyPet.tsx     # Desktop companion animation
│   └── TypingText.tsx     # Typewriter effect component
├── services/               # Core game logic
│   ├── llmService.ts      # Main game service (state, scene matching)
│   ├── scenes/            # Scene definitions
│   │   ├── prologue.ts    # Opening scene
│   │   ├── branch1A.ts    # Branch A scenes
│   │   ├── branch1B.ts    # Branch B scenes
│   │   ├── branch1C.ts    # Branch C scenes
│   │   └── endings.ts     # Ending scenes
│   ├── pathMatcher/       # Path matching logic
│   │   ├── branch1A.ts    # Branch A matcher
│   │   ├── branch1B.ts    # Branch B matcher
│   │   ├── branch1C.ts    # Branch C matcher
│   │   ├── ending.ts      # Ending matcher
│   │   └── sceneMap.ts    # Scene mapping configuration (data-driven)
│   └── stateManager/      # State calculation & updates
│       ├── calculator.ts  # Intimacy/affection calculations
│       └── updater.ts     # State update logic
├── styles/
│   └── index.css          # Tailwind CSS entry point
├── public/                 # Static assets
│   ├── _redirects        # Surge.sh SPA routing config
│   └── firefly/           # Firefly animation sprites
├── docs/                   # Documentation
│   ├── README.md          # Documentation index
│   └── project_overview/   # Project documentation
├── dist/                   # Build output (git-ignored)
├── vite.config.ts          # Vite configuration
├── tailwind.config.cjs     # Tailwind CSS configuration
├── postcss.config.cjs      # PostCSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Key Files

- **`index.html`**: HTML entry point, loads React app
- **`index.tsx`**: React entry point, mounts `App` component
- **`App.tsx`**: Main app component managing game state and flow
- **`services/llmService.ts`**: Core game logic (state management, scene matching)
- **`services/scenes/`**: All scene definitions (narrative, dialogue, choices)
- **`services/pathMatcher/`**: Path matching logic for scene transitions

## Configuration

See `docs/project_overview/CONFIGURATION.md` for detailed configuration documentation.

## Documentation

Full documentation is available in the `docs/` directory. Start with `docs/README.md` for an overview.

## Notes

- Background images are generated from scene descriptions via Pollinations and cached in memory.
- The story content and branching logic live in `services/` (no backend required).
- The `dist/` directory is git-ignored as it's a build artifact.
- Vite `base: './'` is configured for relative paths to support Surge.sh deployment.
