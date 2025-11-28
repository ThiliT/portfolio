# 3D Portfolio (React + Vite + R3F)

A performant developer portfolio featuring React Three Fiber scenes, Tailwind CSS, and smooth interactions.

## Getting Started

```bash
npm install
npm run dev
```

## Tech Stack
- React 18, React Router
- Three.js, @react-three/fiber, @react-three/drei
- Tailwind CSS
- Framer Motion, Lenis

## Project Structure
- `public/models/` – place `.glb/.gltf` models here
- `src/components/_3d/` – 3D scenes
- `src/data/portfolio.ts` – editable data

## Adding 3D Models
1. Download models (GLB/GLTF preferred):
   - Sketchfab (filter Downloadable + CC Attribution/CC0)
   - Poly Pizza (CC0)
2. Put files in `public/models/` (e.g., `laptop.glb`)
3. Load with `useGLTF('/models/laptop.glb')`

Optional: optimize with gltf-pipeline

```bash
npx gltf-pipeline -i input.glb -o output.glb -d
```

## Attribution & Licensing
You must comply with each model's license. Keep an attribution log in `public/models/ATTRIBUTIONS.md`.

Template entry:

```
Name: Laptop (Low Poly)
Source: https://sketchfab.com/...
Author: Author Name (profile link)
License: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)
Filename: /public/models/laptop.glb
Notes: Optimized with gltf-pipeline; no material changes to credit requirements.
```

Recommended free sources:
- Sketchfab free models: https://sketchfab.com/features/free-models (filter by Downloadable + license)
- Poly Pizza: https://poly.pizza (CC0)
- Free3D: https://free3d.com (check per-model license)
- CGTrader Free: https://www.cgtrader.com/free-3d-models (check license)
- Quaternius: http://quaternius.com (CC0)
- Kenney: https://kenney.nl/assets (CC0)

## Performance Tips
- Prefer low-poly models
- Use `dpr={[1,2]}` on Canvas
- Lazy-load heavy scenes via `Suspense`
- Reduce lights and post-processing on mobile

## Replacing Models
- Drop your `.glb/.gltf` in `public/models/`
- Update any scene components to point to the new path, e.g. `useGLTF('/models/your-model.glb')`
- If the model uses animations, access them via `useAnimations` from Drei.

## Post-processing (optional)
Enable effects via `@react-three/postprocessing`:

```tsx
// inside a Canvas
{/* <EffectComposer>
  <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} />
</EffectComposer> */}
```

## Mobile Optimization
- Switch to simplified scenes on small screens
- Reduce shadows, lights, particles
- Prefer compressed textures and Draco-compressed glTF when possible

