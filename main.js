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
  p(pokeData[4].name);
  p(pokeData[4].weight);
  const picture = pokeData[4].sprites.back_default;
  p(pokeData[4].height);
  p(pokeData[4].id);
  //##########################################
  document.querySelector('#app').innerHTML = /* html */ `
  <header class="center">${header}</header>
    <div class="pokedex page center" id="pokedex">
      <img src="${picture}" alt="pokemon Picture">
      <div class="display_border center">
        <div class="display">
          <p>hallo pikachu</p>
        </div>
      </div>
    </div>
  
  
  `;
  //##########################################
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
