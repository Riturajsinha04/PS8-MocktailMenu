import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({favouriteCount}) {
    return(
        <nav className="navbar">
            <div className="nav-brand">
                <Link to="/">Sip & Chill Cafe</Link>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/drinks">Menu</Link>
                <Link to="/favourites"> Favourites 💗 ({favouriteCount})</Link>
            </div>
        </nav>
    );
}