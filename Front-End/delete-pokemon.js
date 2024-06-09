async function fetchPokemons() {
  try {
    const response = await fetch('http://localhost:3000/pokemons');
    const pokemons = await response.json();
    displayPokemons(pokemons);
  } catch (error) {
    console.error('Error fetching Pokemons:', error);
    alert('Failed to fetch Pokemons. Please try again.');
  }
}

function displayPokemons(pokemons) {
  const pokemonList = document.getElementById('pokemon-list');
  pokemonList.innerHTML = '';

  pokemons.forEach((pokemon) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = `
            <span>${pokemon.name} (ID: ${pokemon._id})</span>
            <button class="btn btn-danger btn-sm float-right" onclick="deletePokemon('${pokemon._id}')">Delete</button>
        `;
    pokemonList.appendChild(listItem);
  });
}

async function deletePokemon(pokemonId) {
  try {
    const response = await fetch(
      `http://localhost:3000/pokemons/${pokemonId}`,
      {
        method: 'DELETE',
      }
    );

    if (!response.ok) {
      throw new Error('Failed to delete Pokemon');
    }

    alert('Pokemon deleted successfully!');
    fetchPokemons(); // Atualizar a lista de pokemons após a exclusão
  } catch (error) {
    console.error('Error deleting Pokemon:', error);
    alert('Failed to delete Pokemon. Please try again.');
  }
}

fetchPokemons();
