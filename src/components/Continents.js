import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'

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
        return <div key={i}>{continent.name}
        <div onClick={handleClick}>List of countries</div>
      <div>{countryList}</div>
        <div>list of urban areas</div></div>
      })}
    </div>


  </div>


}

export default Continents