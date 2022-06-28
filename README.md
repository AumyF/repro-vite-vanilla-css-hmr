# repro-vite-vanilla-css-hmr

Vite HMR for CSS not working when developing with vanilla js

## repro

1. `npm i && npm run dev`
2. Input something to `<input>`
3. Edit `style.module.css`
4. Observe that page reload occurs and inputted text clears.
