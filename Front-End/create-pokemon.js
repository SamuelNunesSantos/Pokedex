document
  .getElementById('create-pokemon-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const imgPath = document.getElementById('image').value;

    try {
      const response = await fetch('http://localhost:3000/pokemons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, imgPath }),
      });

      if (!response.ok) {
        throw new Error('Failed to create Pokemon');
      }

      alert('Pokemon created successfully!');
      window.location.href = 'main.html'; // Redirecionar de volta para a página principal
    } catch (error) {
      console.error('Error creating Pokemon:', error);
      alert('Failed to create Pokemon. Please try again.');
    }
  });
