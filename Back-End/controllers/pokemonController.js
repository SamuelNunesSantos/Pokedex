const Pokemon = require("../models/Pokemon");

exports.getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPokemonById = async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    if (!pokemon) {
      return res.status(404).json({ message: "Pokemon not found" });
    }
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPokemon = async (req, res) => {
  try {
    const { name, type, description, imgPath } = req.body;

    const pokemon = new Pokemon({ name, type, description, imgPath });

    await pokemon.save();

    res.status(201).json(pokemon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updatePokemonById = async (req, res) => {
  try {
    const { name, type, description, imgPath } = req.body;

    const pokemon = await Pokemon.findByIdAndUpdate(
      req.params.id,
      { name, type, description, imgPath },
      { new: true }
    );

    if (!pokemon) {
      return res.status(404).json({ message: "Pokemon not found" });
    }

    res.json(pokemon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletePokemonById = async (req, res) => {
  try {
    const pokemon = await Pokemon.findByIdAndDelete(req.params.id);

    if (!pokemon) {
      return res.status(404).json({ message: "Pokemon not found" });
    }

    res.json({ message: "Pokemon deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
