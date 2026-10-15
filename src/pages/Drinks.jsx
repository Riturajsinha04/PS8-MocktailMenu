import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Drinks({ favourites, toggleFavourite }) {
  const [drinks,setDrinks] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then((res) => res.json())
    .then((data) =>{
      setDrinks(data.drinks || []);
      setLoading(false);
    })
    .catch((err) => {
      console.error('Error fetching drinks:', err);
      setLoading(false);
    });
  }, []);

  const filteredDrinks = drinks.filter((drink) =>
    drink.strDrink.toLowerCase().includes(search.toLowerCase())
);

if(loading){
  return <div className="loading">Loading Mocktails menu...</div>
}

return(
  <div className="drinks-page">
    <h2>Non-Alcoholic Mocktail Menu</h2>
    <input type="text" placeholder="Search by drink name.." value={search} onChange={(e) => setSearch(e.target.value)} className="search-input" />

    <div className="drinks-grid">
      {filteredDrinks.length > 0 ? (
        filteredDrinks.map((drink) => {
          const isFav = favourites.some(
            (fav) => fav.idDrink === drink.idDrink
          );

          return (
          <div key={drink.idDrink} className="drink-card">
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <button className={`fav-btn ${isFav ? 'active' : ''}`} onClick={() => toggleFavourite(drink)}>
              {isFav ? '💗' : '🤍'}
            </button>
            <div className="card-body">
              <h3>{drink.strDrink}</h3>
              <Link to={`/drinks/${drink.idDrink}`} className="recipe-btn">View Recipe</Link>
            </div>
          </div>
          );
        })
      ) : (
        <p className="no-result">No mocktails found matching your search.</p>
      )}
    </div>
  </div>
);
}
