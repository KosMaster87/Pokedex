# Frontend Copilot Instructions - Pokédex App

## Project Conventions

- Always use `getElementById` for DOM access in all JavaScript files. No `querySelector` or `getElementsByClassName`.
- Always use classes (`.css`) with hyphens for CSS styling (e.g., `.pokemon-card`, `.main-header`).
- Always use IDs (`id="..."`) in HTML in camelCase style for JavaScript selectors (e.g. `pokemonCard`, `mainHeader`).
- IDs are exclusively reserved for JavaScript access.
- Classes are exclusively reserved for CSS styles.
- Always use `const` and `let`, never `var`.
- **Language Consistency**: All user-facing text, buttons, and labels must be in English to match the Pokémon API.

## JavaScript Function Guidelines

- **Maximum 14 lines per function** - break down complex functions into smaller, focused functions.
- **Consistent spacing**: 1-2 empty lines between functions.
- **camelCase naming** for all functions and variables.
- **Meaningful function names** that clearly describe their purpose.
- **HTML Templates**: Always separate HTML generation into dedicated template functions in `renderHTML.js`.

## JSDoc Requirements

- All JavaScript functions must have JSDoc comments in English.
- Use JSDoc format: `/** */`
- Short, concise description of the function's task.
- Document parameters with `@param {type} name - Description`.
- Document return values with `@returns {type} Description`.
- For async functions: use `@async`.

## Additional Best Practices

- No inline styles or inline event handlers in HTML.
- No magic numbers or strings – use constants instead.
- **ECMAScript Modules**: Use exclusively modern ES6+ modules (`import`/`export`). No CommonJS (`require`/`module.exports`). Target: `module: "es2020"`.
- Name components and functions clearly.
- No duplicate IDs or class names.
- Consistent code formatting (e.g., Prettier, EditorConfig).
- No direct manipulation of state object outside setter functions.

## Reactive UI Updates

- Always control UI changes via central state objects and render functions.
- No direct DOM manipulations outside of render functions.
- State changes always trigger re-rendering of affected UI components.
- Register event listeners only once during initialization.

## State Management Pattern

- Central state object in `state.js` with the following structure:

  - `pokemonList`: Array of loaded Pokémon data
  - `currentOffset`: Current pagination offset for API calls
  - `isLoading`: Boolean for loading states
  - `searchQuery`: Current search term
  - `selectedPokemon`: Currently selected Pokémon for detail view
  - `pokemonCache`: Cache for detailed Pokémon data to avoid redundant API calls

- **Getter Functions**: Always use getter functions for safe state access (e.g., `getPokemonList()`, `getCurrentOffset()`, `getIsLoading()`)
- **Setter Functions**: All state changes only through specialized setter functions (e.g., `addPokemon()`, `setLoading()`, `setSearchQuery()`)
- Each state change triggers re-rendering of affected components via `notifyListeners()`.
- No global variables outside the state object.
- Immutable updates: Never mutate state directly, always create new objects/arrays.

## Pokémon-Specific Guidelines

- **Lazy Loading**: Only load detailed Pokémon data when needed (e.g., when opening detail view).
- **Fetch-then-Render**: Always complete data fetching before rendering UI components.
- **Type-based Styling**: Use Pokémon type for background colors and styling.
- **API Efficiency**: Cache Pokémon data to minimize redundant API calls.
- **User Feedback**: Always show loading states during API operations.
- **Search Functionality**: Minimum 3 characters required before enabling search.

## File Organization

- `index.html`: Main HTML structure
- `script.js`: Main application logic and initialization
- `state.js`: Centralized state management
- `api.js`: Pokémon API integration functions
- `renderHTML.js`: HTML template functions
- `utils.js`: Utility functions (type colors, formatters, etc.)
- `style.css`: All styling and responsive design

## Responsive Design Requirements

- Mobile-first approach starting from 320px width
- No horizontal scrollbars on any device
- Content max-width constraint for large monitors (1440px-1920px)
- Touch-friendly interface elements
- Proper hover states for desktop
