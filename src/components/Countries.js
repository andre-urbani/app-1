import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'

const Countries = () => {

  const counts = 'country:items'

  const [countries, setCountries] = useState([])

  const [selectedCountry, setSelectedCountry] = useState([])

  useEffect(() => {
    axios.get('https://api.teleport.org/api/countries/')
      .then(res => {
        const countryList = res.data._links[counts]
        setCountries(countryList)
      })
  }, [])

  function handleClick(e) {
    const target = e.target.getAttribute('id')
    e.preventDefault()
    setSelectedCountry({
      link: {target}
    })
    console.log(target)
  }

  return <div className="continents-container">
    <div>
      {countries.map((country, i) => {
        return <div key={i} onClick={handleClick} id={country.href}>{country.name}
        {/* <div onClick={handleClick}>List of countries</div>
      <div>{countryList}</div> */}
        {/* <div>list of urban areas</div> */}
        </div>
      })}
    </div>


  </div>


}

export default Countries