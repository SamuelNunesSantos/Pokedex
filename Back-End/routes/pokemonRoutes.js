const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemonController");

router.get("/", pokemonController.getAllPokemons);

router.get("/:id", pokemonController.getPokemonById);

router.post("/", pokemonController.createPokemon);

router.put("/:id", pokemonController.updatePokemonById);

router.delete("/:id", pokemonController.deletePokemonById);

module.exports = router;
