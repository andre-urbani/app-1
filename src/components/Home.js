import React, { useState, useCallback } from 'react';
import axios from 'axios'

import { Link } from 'react-router-dom'

const Home = (props) => {

const selectedCity = "city:item"

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

  // function handleClick(e) {
  //   e.preventDefault(e)
  //   const test = e.target.value
  //   props.history.push('/city', test)
  // }

  return <div className="homepage-container">
    <div>
      About
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
          const target = search._links[selectedCity].href
          return <div key={i} value={search.matching_full_name}><Link
          to={{
            pathname: '/city',
            target
          }}>{search.matching_full_name}</Link></div>
            
        })}
        {/* </select>
      </datalist> */}
    </div>

  </div>

}

export default Home