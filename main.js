import './style.css';
import {fetchPokeData} from './fetch.js';
import {print as p} from './utils.js';



const pokemonName = 'Pikachu';
const header = '<img alt="Pokedex Header" src="./Images/Pokedex-font.png">';

document.querySelector('#app').innerHTML = `
<header class=center >${header}</header>
<p>Hi It's me ${pokemonName}!</p>
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;


