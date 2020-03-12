import React, { useState } from 'react';
import axios from 'axios'

const Navbar = () => {

  const citySearch = "city:search-results"

  const [searches, setSearches] = useState([])

  const handleSearch = (e) => {
    e.target.value !== '' ?
      axios.get(`https://api.teleport.org/api/cities/?search=${e.target.value}`)
        .then(res => setSearches(res.data))
        .catch(err => console.log(err))
        : setSearches ('')
// console.log(searches._embedded[citySearch][0])
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
    <div>
    {searches ? searches.map((search, i) => {
                return <div key={i}>{search._embedded[citySearch][0].matching_full_name}</div>
              }) : null }
    </div>
  </div>



}

export default Navbar