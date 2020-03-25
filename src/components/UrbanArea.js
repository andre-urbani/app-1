import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'


const UrbanArea = (props) => {

  const image = 'ua:images'

  const [urbanArea, setUrbanArea] = useState([])

  useEffect(() => {
    axios.get(props.location.target)
      .then(res => {
        const uaList = res.data._links
        setUrbanArea(uaList)
        
      })
  }, [])

  return <div>

    {console.log(urbanArea[image])}
    {/* <img src={urbanArea[image].href} /> */}
  </div>

  

}

export default UrbanArea