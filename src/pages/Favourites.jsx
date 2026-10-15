import React from 'react';
import { Link } from 'react-router-dom';

export default function Favourites({ favourites, toggleFavourite }) {
    return (
        <div className="drinks-page">
        <h2>Your Favourtie Mocktails</h2>

        {favourites.length === 0 ? (
            <div classname="no-result">
                <p>No favourites added yet!</p>
                <Link to="/drinks" className="recipe-btn" style={{marginTop: '1rem', display: 'inline-block'}}>Browse Menu</Link> 
            </div>
        ) : (
            <div className="drinks-grid">
                {favourites.map((drink) => (
                    <div key={drink.idDrink} className="drink-card">
                        <div classname="card-image-container">
                            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                            <button className="fav-btn active" onClick={() => toggleFavourite(drink)}>💗</button>
                        </div>
                        <div className="card-body">
                            <h3>{drink.strDrink}</h3>
                            <Link to={`/drinks/${drink.idDrink}`} className="recipe-btn">View Recipe</Link>
                    </div>
                    </div>
                ))}
            </div>
        )}

        </div>
    );
}