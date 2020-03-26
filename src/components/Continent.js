import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'


const Continent = (props) => {

  const [continent, setContinent] = useState([])

  useEffect(() => {
    axios.get(props.location.target)
      .then(res => {
        const uaList = res.data._links
        setUrbanArea(uaList)
          })
  }, [])

  return <div>
  </div>



}

export default Continent