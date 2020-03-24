import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'

const Country = (props) => {

  const [country, setCountry] = useState([])

  const [salaries, setSalaries] = useState([])

  // const [selectedJob, setSelectedJob] = useState(null)

  const [percentiles, setPercentiles] = useState({
    twentyFifth: '',
    fiftieth: '',
    seventyFifth: ''
  })

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

  function handleClick(e, index) {
    e.preventDefault()
    setPercentiles({
      twentyFifth: salaries[index].salary_percentiles.percentile_25.toFixed(0),
      fiftieth: salaries[index].salary_percentiles.percentile_50.toFixed(0),
      seventyFifth: salaries[index].salary_percentiles.percentile_75.toFixed(0)

    })
    console.log(index)
  }

  return <div className="continents-container">
    {console.log(country.iso_alpha2)}
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
      {salaries.map((salary, i) => {
        return <div key={i}>{salary.job.title} </div>
      })}

    </div> */}
    {country.iso_alpha2 ?
      <img src={`https://www.countryflags.io/${country.iso_alpha2}/shiny/64.png`} />
      : null}

    <div class="dropdown">
      <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        {salaries.map((salary, i) => {
          return <a key={i} onClick={(e) => handleClick(e, i)} id={salary.salary_percentiles}>{salary.job.title}</a>

        })}
      </div>
    </div>
    {percentiles.twentyFifth ?
      <div>
        ${percentiles.twentyFifth}
      </div>
      : null}
    {percentiles.fiftieth ?
      <div>
        ${percentiles.fiftieth}
      </div>
      : null}
    {percentiles.seventyFifth ?
      <div>
        ${percentiles.seventyFifth}
      </div>
      : null}

  </div>


}

export default Country