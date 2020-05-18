import React, { useState, useEffect } from 'react';
import axios from 'axios'

const City = (props) => {

  const [city, setCity] = useState([])
  
  const uArea = 'city:urban_area'

  const [urbanArea, setUrbanArea] = useState([])

  useEffect(() => {
    axios.get(props.location.target)
      .then(res => {
        const cityList = res.data._links
        setCity(cityList)
        setUrbanArea(cityList[uArea])
        
      })
  }, [])
  

  return <div>
    {console.log(urbanArea.href)}
  </div>



}

export default City