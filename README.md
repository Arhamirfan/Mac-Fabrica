# MacBook 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Node version
v22.21.0

## Installed packages:
```bash
npm i tailwindcss zustand clsx three @react-three/drei @react-three/fiber
npm i gsap @gsap/react react-responsive
```

### React-responsive
react-responsive is used to apply conditional animation logic and layout depending on different screen sizes


## To convert 3d model -> jsx

```bash
cd public/models
npx gltfjsx macbook-14.glb -T 
```

It will convert to react component and -T command flatten file and give cleaner structure