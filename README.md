# Pokedex SPA - Interactive Pokemon Explorer

A Single Page Application built with Vanilla JavaScript, CSS Grid, and PokeAPI integration.
No external frontend framework.

---

## Preview

![Pokedex Screenshot](./assets/img/pokedex-preview.png)

---

## Core Features

- 100% Vanilla JavaScript - no external dependencies
- Mobile-first responsive layout (320px - 1440px), CSS Grid & Flexbox
- Lazy loading with "Load More" pagination
- Fetch-then-render data loading pattern
- Live search (min. 3 characters)
- Touch-optimized mobile experience
- Accessibility: ARIA attributes, keyboard navigation

## Quick Start

```bash
pnpm install
pnpm run dev
# → opens http://localhost:3002
```

## Structure

```text
pokedex/
├── index.html              # Main application entry
├── css/                     # Modular CSS architecture
│   ├── base.css             # Global styles & grid layout
│   ├── header.css           # Header component styles
│   ├── footer.css           # Footer & load more button
│   ├── pokemon-cards.css    # Card component styling
│   ├── pokemon-detail.css   # Modal overlay styles
│   ├── pokemon-types.css    # Type colors & badges
│   └── loader.css           # Loading animations
├── js/                      # JavaScript modules
│   ├── script.js            # Main application logic & state
│   ├── renderHTML.js        # HTML template functions
│   └── futures.js           # Utility functions
└── assets/img/               # Images and icons
```

## API Integration

```js
// Pokemon list
https://pokeapi.co/api/v2/pokemon?limit=40&offset=0

// Individual Pokemon details
https://pokeapi.co/api/v2/pokemon/{id}

// Pokemon species for additional info
https://pokeapi.co/api/v2/pokemon-species/{id}
```

## Development Standards

- Functions max. 14 lines, camelCase naming
- HTML templates in separate functions
- Mobile-first CSS, CSS custom properties for the type-color system
- Responsive down to 320px, no horizontal scrollbars

## JSDoc

```bash
pnpm run docs         # generate into docs/
pnpm run docs:serve   # serve locally on port 8082
```

## Browser Support

Chrome/Edge, Firefox, Safari (modern versions), mobile browsers (iOS Safari, Chrome Mobile).

## License

This project is created for educational purposes as part of a Developer Akademie course.
