function fetchPokemon() {
  fetch('http://localhost:3000/pokemons')
    .then((response) => response.json())
    .then((data) => {
      pokemons = data;
      displayPokemon(currentIndex);
    })
    .catch((error) => console.error('Error fetching Pokemon:', error));
}

let pokemons = [];
let currentIndex = 0;

function displayPokemon(index) {
  const pokemon = pokemons[index];
  document.getElementById('pokemon-image').src = pokemon.imgPath;
  document.getElementById('pokemon-name').innerText = pokemon.name;
  document.getElementById('pokemon-description').innerText =
    pokemon.description;
}

function nextPokemon() {
  currentIndex = (currentIndex + 1) % pokemons.length;
  displayPokemon(currentIndex);
}

function prevPokemon() {
  currentIndex = (currentIndex - 1 + pokemons.length) % pokemons.length;
  displayPokemon(currentIndex);
}

fetchPokemon();
