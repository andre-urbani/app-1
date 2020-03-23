import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'

const Country = (props) => {

  const [country, setCountry] = useState([])

  const [salaries, setSalaries] = useState([])

  useEffect(() => {
    axios.get(props.location.target)
      .then(res => {
        setCountry(res.data)
        axios.get(`${props.location.target}salaries`)
        .then(res => {
          const salaryList = res.data.salaries
          setSalaries(salaryList)
      })
      })
  }, [])

  return <div className="continents-container">
    {console.log(salaries[0])}
    <div>
     {country.name}
    </div>
    <div>
     Population: {country.population}
    </div>
    <div>
     Currency: {country.currency_code}
    </div>
    <div>
    {salaries.map((salary, i) => {
          return <div key={i}>{salary.job.title} </div>
        })}
    
    </div>
  </div>


}

export default Country