import React, { useState}  from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Drinks from './pages/Drinks';
import DrinkDetail from './pages/DrinkDetail';
import Favourites from './pages/Favourites';
import NotFound from './pages/NotFound';
import './App.css';

function App(){
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (drink) => {
    if(favourites.some((fav) =>fav.idDrink === drink.idDrink)) {
      setFavourites(favourites.filter((fav) => fav.idDrink !== drink.idDrink));
    }else{
      setFavourites([...favourites, drink]);
    }
  };

  return(
    <Router>
      <div className="app">
        <Navbar favouriteCount={favourites.length}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route
              path="/drinks"
              element={
                <Drinks
                  favourites={favourites}
                  toggleFavourite={toggleFavourite}
                />
              }
            />
            <Route path="/drinks/:id" element={<DrinkDetail />}/>
            <Route path="/favourites" element={<Favourites favourites={favourites} />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
      </div>
    </Router>
  )
}

export default App;
