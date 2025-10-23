/**
 * Erstellt das HTML für eine einzelne Pokémon-Karte.
 * Die Typen des Pokémon werden separat mit der Funktion mapPokemonType() gerendert.
 *
 * @param {Object} pokemonToMainCard - Das Pokémon-Objekt, das gerendert werden soll.
 * @returns {string} - HTML-String für die Hauptkarte des Pokémon.
 */
function renderEachCardHTML(pokemonToMainCard) {
  const name = capitalizeFirstLetter(pokemonToMainCard.name);

  return `
    <div
      class="mainCard ${pokemonToMainCard.types[0].type.name}"
      onclick="createHTMLPokemonPopup(${pokemonToMainCard.id})" 
    >
      <div class="pokemonInfo">
        <p class="pokeName">${name}</p>
        <div class="typesList" id="${pokemonToMainCard.id}"></div>
      </div>

      <div class="pokemonImageBox">
        <img 
        class="pokemonImage"
        src="${pokemonToMainCard.sprites.front_default}" />
      </div>
    </div>
  `;
}

/**
 * Erstellt das HTML für das detaillierte Pokémon-Popup mit Bild, Fähigkeiten und Typen.
 *
 * @param {Object} pokemon - Das Pokémon, dessen Details angezeigt werden sollen.
 * @returns {string} - HTML-String für das Popup-Fenster.
 */
function renderPokemonPopupHTML(pokemon) {
  const name = capitalizeFirstLetter(pokemon.name);
  const image = pokemon.sprites.front_default;
  const typeClass = pokemon.types[0].type.name;

  const typesHTML = pokemon.types
    .map((t) => `<p class="${t.type.name}">${t.type.name}</p>`)
    .join("");

  const abilitiesHTML = pokemon.abilities
    .map((ab) => `<p>${ab.ability.name}</p>`)
    .join("");

  return `
    <div class="infocardContainer ${typeClass}">
      <h2 class="infocardPokemonName">${name}</h2>

      <img src="${image}" alt="${name}" class="infocardPokemonImage" />

      <h3>Fähigkeiten</h3>
      <div class="abilities">${abilitiesHTML}</div>

      <h3>Typen</h3>
      <div class="infocardTypesList">${typesHTML}</div>

      <button onclick="closePopup()" class="closePopupBtn">✖</button>
    </div>
  `;
}

/**
 * Rendert die Typen eines Pokémon als HTML und fügt sie in das entsprechende Element ein.
 *
 * @param {Object} pokemonToMainCard - Das Pokémon-Objekt, dessen Typen angezeigt werden sollen.
 */
function mapPokemonType(pokemonToMainCard) {
  let typesList = document.getElementById(pokemonToMainCard.id); // Container für die Typen ist bereits vorhanden.

  typesList.innerHTML = "";
  pokemonToMainCard.types.map((indexTypes) => {
    typesList.innerHTML += `
            <p>${indexTypes.type.name}</p>
        `;
  });
}
