async function fetchPokemons() {
  try {
    const response = await fetch('http://localhost:3000/pokemons');
    const pokemons = await response.json();
    populatePokemonSelect(pokemons);
  } catch (error) {
    console.error('Error fetching Pokemons:', error);
    alert('Failed to fetch Pokemons. Please try again.');
  }
}

function populatePokemonSelect(pokemons) {
  const pokemonSelect = document.getElementById('pokemon-select');
  pokemonSelect.innerHTML =
    '<option value="" disabled selected>Select Pokemon</option>';

  pokemons.forEach((pokemon) => {
    const option = document.createElement('option');
    option.value = pokemon._id; // Usando o ID do Pokemon como valor
    option.textContent = `${pokemon.name} (ID: ${pokemon._id})`;
    pokemonSelect.appendChild(option);
  });
}

document
  .getElementById('update-pokemon-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();

    const pokemonId = document.getElementById('pokemon-select').value;
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    try {
      const response = await fetch(
        `http://localhost:3000/pokemons/${pokemonId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, description, image }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update Pokemon');
      }

      alert('Pokemon updated successfully!');
    } catch (error) {
      console.error('Error updating Pokemon:', error);
      alert('Failed to update Pokemon. Please try again.');
    }
  });

fetchPokemons();
