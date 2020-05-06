import React, { useState, useCallback } from 'react';
import axios from 'axios'

import { Link } from 'react-router-dom'

const Home = () => {


  const citySearch = "city:search-results"

  const [searches, setSearches] = useState([])

  const handleSearch = useCallback((e) => {
    e.target.value !== '' ?
      axios.get(`https://api.teleport.org/api/cities/?search=${e.target.value}`)
        .then(res => {
          const suggest = res.data._embedded[citySearch].slice(0, 10)
          setSearches(suggest)
        })
        .catch(err => console.log(err))
      : setSearches([''])
   
  }, [searches])

  function handleClick(e) {
    e.preventDefault(e)
    console.log('hello')
  }

  return <div className="homepage-container">
    <div>
      About
    </div>
    <div>
      <Link to="/graph">TEST1</Link>
    </div>
    <div>
      <Link to="/graph2">TEST2</Link>
    </div>
    <div>
      <Link to="/radar">TEST3</Link>
    </div>
    <div>
      <Link to="/radartest">TEST4</Link>
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
    <div className="search-bar">
      <input type="text" placeholder="Search for a city..." onChange={handleSearch} list="cities" name="city" />
      {/* <datalist id="cities">
      <select onChange={handleClick}>  */}
        {searches.map((search, i) => {
          return <div key={i} value={search.matching_full_name} onClick={handleClick}><Link to="/cities">{search.matching_full_name}</Link></div>
            
        })}
        {/* </select>
      </datalist> */}
    </div>

  </div>

}

export default Home