import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

const Countries = (props) => {

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

  return <div className="continents-container">
    <div>
      {countries.map((country, i) => {
        const target = country.href
        return <div key={i} >
        <p><Link
              to={{
                pathname: '/country',
                target
              }}>{country.name}</Link></p>
        </div>
      })}
    </div>


  </div>


}

export default Countries