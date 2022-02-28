import './style.css';
import { print as p } from './utils.js';

let pokeNum = 1; // Chose the number of the pokemon
// const pokeData = fetchPokeData();
const header = '<img alt="Pokedex Header" src="./Images/Pokedex-font.png">';

async function run() {
  const pokeUrls = await fetchPokeData();

  // [url1, url2, ...] --> [dataPokemon1, dataPokemon2, ...]

  const pokePromises = pokeUrls.map(url => {
    return fetchSinglePoke(url);
  });
  const pokeData = await Promise.all(pokePromises);
  pokeNum -= 1;
  const pokemon = pokeData[pokeNum];
  const pokemonFrontSprite = pokemon.sprites.other.dream_world.front_default;
  const pokemonName = pokemon.name;
  const pokemonType = pokemon.types[0].type.name;
  p(pokemon.name);
  p(pokemon.weight);
  p(pokemon.height);
  //##########################################
  document.querySelector('#app').innerHTML = /* html */ `
  <header class="center_flex">${header}</header>
  <div class="wrapper">
    <div class="pokedex_main page center_flex" id="pokedex_main">

      <div class="display_border_main center_flex">
        <div class="display_main center_flex">
          <img
          class="max_width"
          src="${pokemonFrontSprite}"
          alt="pokemon Picture"
          />
        </div>
      </div>
    </div>
    <div class="pokedex_info page center_flex" id="pokedex_info">
      <div class="display_info">
       <p>It's ${pokemonName}, a ${pokemonType} Pokemon!</p>
      </div>
    </div>
  </div>
  
  
  `;
  //##########################################
}

run();
// const pokeUrl = fetchPokeUrl(pokeData);

async function fetchPokeData() {
  try {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/?limit=151'
    );
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
