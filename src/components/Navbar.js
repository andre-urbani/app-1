import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

  return <div className="navbar-container">
    <div>
    <Link to="/">Home</Link>
    </div>
    <div>
    <Link to="/about">About</Link>
    </div>
    <div>
    <Link to="/continents">Continents</Link>
    </div>
    <div>
    <Link to="/countries">Countries</Link>
    </div>
    <div>
    <Link to="/urbanareas">Urban Areas</Link>
    </div>
  </div>



}

export default Navbar