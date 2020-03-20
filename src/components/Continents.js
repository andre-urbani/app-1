import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'

const Continents = () => {

const conts = 'continent:items'

const [continents, setContinents] = useState ([])

useEffect(() => {
  axios.get('https://api.teleport.org/api/continents/')
    .then(res => {
      const continentList = res.data._links[conts]
      setContinents(continentList)
    })
}, [continents])

return <div className="continents-container">

  <div>
    hello world
  </div>




</div>

} 

export default Continents