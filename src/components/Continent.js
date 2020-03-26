import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'


const Continent = (props) => {

  const [continent, setContinent] = useState([])

  useEffect(() => {
    axios.get(props.location.target)
      .then(res => {
        const selected = res.data._links
        setContinent(selected)
          })
  }, [])

  return <div>
    {console.log(continent)}
  </div>



}

export default Continent