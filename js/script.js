let pokeAmount = 20;
let pokemonsAsObject = [];

let AllLoadedCards = [];
let currentPokemon;

let offset = 0;
const limit = 20;

/**
 * Initialisiert die Anwendung, lädt eine bestimmte Anzahl an Pokémon
 * und rendert die Pokémon-Karten im HTML-Dokument.
 */
async function init() {
  await fetchPokemon(1, pokeAmount);
  offset = pokeAmount;
  await createHTMLPokemonCard();
  loader();
}

/**
 * Blendet den Ladebildschirm ("Loading Pokémon...") aus.
 */
function loader() {
  document.getElementById("loadingIndicator").style.display = "none";
}

/**
 * Lädt zusätzliche Pokémon-Daten von der API und rendert sie.
 * Während des Ladens wird ein Spinner angezeigt.
 */
async function loadMorePokemons() {
  document.getElementById("loadMoreSpinner").style.display = "block";

  await fetchPokemon(offset + 1, limit);
  offset += limit;
  await createHTMLPokemonCard();

  document.getElementById("loadMoreSpinner").style.display = "none";
}

/**
 * Holt eine bestimmte Anzahl an Pokémon-Daten von der API
 * und speichert diese in einem globalen Array.
 *
 * @param {number} startIndex - Der Startindex der Pokémon-ID.
 * @param {number} count - Die Anzahl der zu ladenden Pokémon.
 */
async function fetchPokemon(startIndex, count) {
  for (let i = startIndex; i < startIndex + count; i++) {
    let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let detailsAsJson = await fetch(pokemonUrl).then((r) => r.json());
    pokemonsAsObject.push(detailsAsJson);
  }
  console.log(pokemonsAsObject);
}

/**
 * Erstellt HTML-Karten für alle noch nicht gerenderten Pokémon
 * und fügt sie dem Hauptbereich der Seite hinzu.
 */
async function createHTMLPokemonCard() {
  let mainSection = document.getElementById("mainSection");

  for (
    let cardIndex = AllLoadedCards.length;
    cardIndex < pokemonsAsObject.length;
    cardIndex++
  ) {
    const pokemonToMainCard = pokemonsAsObject[cardIndex];
    AllLoadedCards.push(pokemonToMainCard);

    const cardHTML = renderEachCardHTML(pokemonToMainCard);
    mainSection.insertAdjacentHTML("beforeend", cardHTML);

    mapPokemonType(pokemonToMainCard);
  }

  delayMainCard();
}

/**
 * Fügt eine zeitverzögerte Klasse zu jeder Karte hinzu, um Animationseffekte
 * beim Einblenden der Karten zu erzielen.
 */
function delayMainCard() {
  let cards = document.querySelectorAll(".pokemon-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("visible");
    }, index * 100);
  });
}

/**
 * Erstellt ein detailliertes Popup-Fenster mit Informationen zum
 * ausgewählten Pokémon.
 *
 * @param {number} index - Die ID des aktuell angeklickten Pokémon.
 */
function createHTMLPokemonPopup(index) {
  currentPokemon = AllLoadedCards.find((pokemon) => pokemon.id === index);

  const container = document.getElementById("pokemonDetailOverlay");
  container.innerHTML = "";
  container.style.display = "flex";
  container.innerHTML = renderPokemonPopupHTML(currentPokemon);
}

/**
 * Schließt das Detail-Popup-Fenster des Pokémon.
 */
function closePopup() {
  document.getElementById("pokemonDetailOverlay").style.display = "none";
}
