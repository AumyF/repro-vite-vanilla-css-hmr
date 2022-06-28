import classes from './style.module.css'

document.querySelector('#app').innerHTML = `
  <div class="${classes.app}">
    <h1>Hello Vite!</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
    <input type="text"/>
  </div>
`;

