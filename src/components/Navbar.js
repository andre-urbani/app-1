import React, { useState, useCallback } from 'react';
import axios from 'axios'

const Navbar = () => {

  const citySearch = "city:search-results"

  const [searches, setSearches] = useState([])

const handleSearch = useCallback((e) => {

  axios.get(`https://api.teleport.org/api/cities/?search=${e.target.value}`)
  
  .then(res => {
    const suggest = res.data._embedded[citySearch]
    setSearches(suggest)

  })
  .catch(err => console.log(err))
  console.log(searches)
}, [searches])

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
    {searches.map((search, i) => {
                return <div key={i}>{search.matching_full_name}</div>
              })}
    </div>
    {/* <div>{searches.matching_full_name}</div> */}
  </div>



}

export default Navbar