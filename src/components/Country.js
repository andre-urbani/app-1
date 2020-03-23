import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'

const Country = (props) => {

  console.log(props.location.state)

  const [country, setCountry] = useState([])

  useEffect(() => {
    axios.get(props.location.target)
      .then(res => {
        setCountry(res.data)
      })
  }, [])

  return <div className="continents-container">
    <div>
     {country.name}
    </div>
    <div>
     Population: {country.population}
    </div>
    <div>
     Currency: {country.currency_code}
    </div>
  </div>


}

export default Country