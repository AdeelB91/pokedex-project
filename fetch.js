import { print as p } from "./utils.js";

const pokeData = fetchPokeData();

export async function fetchPokeData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    const url = showData(data.results);
    p(url);
    fetchPokeUrl(url);
  } 
  catch(error) {
    console.log(error);
  } 
}

function showData(data) {
  data.forEach((pokemon) => {
    //p(pokemon.url);
    return (pokemon.url);
  })
}

async function fetchPokeUrl(dataUrl) {
  try {
    const response = await fetch(dataUrl);
    const data = await response.json();
    p(data)
  } 
  catch(error) {
    console.log(error);
  } 
}