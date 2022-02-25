

export async function fetchPokeData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    console.log(data.results);
  } 
  catch(error) {
    console.log(error);
  } 
}