import React, { useState } from 'react';
import axios from 'axios'

const Navbar = () => {

  const [searches, setSearches] = useState()

  const handleSearch = (e) => {
    e.target.value !== '' ?
      axios.get(`https://api.teleport.org/api/cities/?search=${e.target.value}`)
        .then(res => setSearches(res.data.data.slice(0, 10)))
        .catch(err => console.log(err))
      : setSearches('')

  }

  return <div className="navbar-container">
    <div>Home</div>
    <div>Continents</div>
    <div>Countries</div>
    <div>Cities</div>
    <div>Urban Area Scores</div>
    <div className="search-bar">
      <input type="text" placeholder="Search for a city..." onChange={handleSearch}></input>
    </div>
    </div>

    }
    
export default Navbar