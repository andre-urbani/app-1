import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

const Continents = () => {

  const conts = 'continent:items'

  const [countryList, setCountryList] = useState(null)

  const [continents, setContinents] = useState([])

  useEffect(() => {
    axios.get('https://api.teleport.org/api/continents/')
      .then(res => {
        const continentList = res.data._links[conts]
        setContinents(continentList)
      })
  }, [])

function handleClick() {
 setCountryList('helloworld')
}

  return <div className="continents-container">
    {console.log(continents)}

    <div>
      {continents.map((continent, i) => {
        const target = continent.href
        return <div key={i}><Link
        to={{
          pathname: '/continent',
          target
        }}>{continent.name}</Link>
        <div onClick={handleClick}>List of countries</div>
      <div>{countryList}</div>
        <div>list of urban areas</div></div>
      })}
    </div>


  </div>


}

export default Continents