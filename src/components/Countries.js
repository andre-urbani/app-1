import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'

const Countries = () => {

  const counts = 'country:items'

  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://api.teleport.org/api/countries/')
      .then(res => {
        const countryList = res.data._links[counts]
        setCountries(countryList)
      })
  }, [])

  return <div className="continents-container">
    {console.log(countries)}

    <div>
      {countries.map((country, i) => {
        return <div key={i}>{country.name}
        {/* <div onClick={handleClick}>List of countries</div>
      <div>{countryList}</div> */}
        {/* <div>list of urban areas</div> */}
        </div>
      })}
    </div>


  </div>


}

export default Countries