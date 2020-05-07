import React, { useState, useEffect } from 'react';
import axios from 'axios'

const City = (props) => {

  const [city, setCity] = useState([])
  
  const uArea = 'city:urban_area'

  const [urbanArea, setUrbanArea] = useState()

  useEffect(() => {
    axios.get(props.location.target)
      .then(res => {
        const cityList = res.data._links
        setCity(cityList)
        // axios.get(props.location.target._links[uArea])
        //   .then(res => {
        //     setUrbanArea(res.data.href)
        // })
      })
  }, [])
  

  return <div>
    hello
    {/* {city} */}
    {console.log(city[uArea])}
  </div>



}

export default City