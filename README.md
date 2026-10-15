# PS8 Mocktail Menu

**PS Number:** PS8 Mocktail Menu  
**Project Name:** Mocktail Bar

## Live project

[Open the live Mocktail Menu application](https://ps-8-mocktail-menu-gray.vercel.app/)

## Deployment

The project is configured for Vercel deployment with `vercel.json`. The rewrite sends direct requests for client-side routes back to the React application, so URLs such as `/drinks/5` continue to work after a page refresh instead of returning a 404 error.

## About the project

PS8 Mocktail Menu is a React application for browsing non-alcoholic drinks. Users can explore the mocktail catalogue, search by drink name, view recipe details, and save drinks to a favourites list.

## API used

The project uses [TheCocktailDB API](https://www.thecocktaildb.com/).

| Feature | API endpoint |
| --- | --- |
| Mocktail catalogue (`/drinks`) | `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic` |
| Drink details (`/drinks/:id`) | `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=:id` |

## Routes

| Route | Description |
| --- | --- |
| `/` | Home page with the hero section and menu link |
| `/drinks` | Mocktail catalogue with live search |
| `/drinks/:id` | Dynamic recipe details page for a selected drink |
| `/favourites` | Page displaying the user's saved drinks |
| `*` | Fallback 404 page for unknown routes |

## Screenshots

### Home page

![Mocktail Menu home page](./screenshots/home.png)

### Mocktail menu

![Mocktail catalogue page](./screenshots/drinks.png)

## Features

- Browse non-alcoholic mocktails
- Search the catalogue by drink name
- View drink images, category, glass type, ingredients, measurements, and instructions
- Add and remove drinks from favourites
- Navigate through the application with React Router
- Responsive custom styling

## Tech stack

- React
- Vite
- React Router
- TheCocktailDB API
- Oxlint

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run Oxlint
```

## Project structure

```text
src/
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── DrinkDetail.jsx
│   ├── Drinks.jsx
│   ├── Favourites.jsx
│   ├── Home.jsx
│   └── NotFound.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```
