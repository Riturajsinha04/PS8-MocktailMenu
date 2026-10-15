import React, {useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function DrinkDetail() {
  const { id } = useParams();
  const [drink, setDrink] = useState(null);
  const [loading, setLoading] =useState(true);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => {
      if(data.drinks && data.drinks.length > 0) {
        setDrink(data.drinks[0]);
      }
      setLoading(false);
    })
    .catch((err) => {
      console.log('Error fetching details:', err)
      setLoading(false);
    });
  }, [id]);

  if(loading) return <div className="loading">Loading recipe details...</div>
  if(!drink) return <div className="loading">Drink not found.</div>

  const ingredients = [];
  for(let i=1; i<=15; i++){
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];
    if(ingredient) {
      ingredients.push({
        name: ingredient,
        measure: measure ? measure : '',
      });
    }
  }

  return (
     <div className="detail-page">
      <Link to="/drinks" className="back-link">← Back to Menu </Link>

      <div className="detail-container">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} className="detail-img" />

      <div className="detail-info">
        <h2>{drink.strDrink}</h2>
        <p><strong>Category:</strong> {drink.strCategory}</p>
        <p><strong>Glass Type:</strong> {drink.strGlass}</p>

        <h3>Ingredients</h3>
        <ul className="ingredients-list">
          {ingredients.map((item,index) => (
            <li key={index}>
              {item.measure} {item.name}
            </li>
          ))}
        </ul>

        <h3>Instructions</h3>
        <p className="instructions">{drink.strInstructions}</p>
      </div>
     </div>
     </div>
  );
}
