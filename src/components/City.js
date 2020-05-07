import React, { useState, useEffect } from 'react';
import axios from 'axios'

const City = (props) => {

  const [city, setCity] = useState([])


  useEffect(() => {
    axios.get(props.location.target)
      .then(res => {
        const cityList = res.data._links
        setCity(cityList)
      })
  }, [])
  

  return <div>
    hello
    {/* {city} */}
    {console.log(city)}
  </div>



}

export default City