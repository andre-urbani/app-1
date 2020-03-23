import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'

const Country = (props) => {

  const [country, setCountry] = useState([])

  const [salaries, setSalaries] = useState({})

  useEffect(() => {
    axios.get(props.location.target)
      .then(res => {
        setCountry(res.data)
        axios.get(`${props.location.target}salaries`)
        .then(res => {
          setSalaries(res.data)
      })
      })
  }, [])

  return <div className="continents-container">
    {console.log(salaries.salaries)}
    <div>
     {country.name}
    </div>
    <div>
     Population: {country.population}
    </div>
    <div>
     Currency: {country.currency_code}
    </div>
    {/* <div>
     Job 1: {salaries.salaries[0].job.title}
    </div> */}
  </div>


}

export default Country