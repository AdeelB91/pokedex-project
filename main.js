import './style.css';
import { print as p } from './utils.js';

// const pokeData = fetchPokeData();
const pokemonName = 'Pikachu';
const header = '<img alt="Pokedex Header" src="./Images/Pokedex-font.png">';

async function run() {
  const pokeUrls = await fetchPokeData();

  // [url1, url2, ...] --> [dataPokemon1, dataPokemon2, ...]

  const pokePromises = pokeUrls.map(url => {
    return fetchSinglePoke(url);
  });
  const pokeData = await Promise.all(pokePromises);
  p(pokeData);
  p(pokeData[0].name);
  p(pokeData[4].weight);

  p(pokeData[4].id);
  document.querySelector('#app').innerHTML = /* html */ `
  <header class=center >${header}</header>
  <p>Hi It's me ${pokemonName}!</p>
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
}
run();
// const pokeUrl = fetchPokeUrl(pokeData);

export async function fetchPokeData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    const urlArray = getUrlData(data.results);
    return urlArray;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSinglePoke(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

function getUrlData(data) {
  const urlArray = [];
  data.forEach(pokemon => {
    // p(pokemon.url);
    urlArray.push(pokemon.url);
  });
  return urlArray;
}
