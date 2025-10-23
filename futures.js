const typeColors = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  steel: "#B8B8D0",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
};

const filterTypeGroup = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "flying",
  "bug",
  "poison",
  "rock",
  "ground",
  "fighting",
  "ice",
  "psychic",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

/**
 * Converts the first letter of a string to uppercase.
 * @param {string} text - The text to change.
 * @returns {string} - The changed text.
 */
function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
