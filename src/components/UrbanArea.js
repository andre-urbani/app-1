import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'


const UrbanArea = (props) => {

  const [urbanArea, setUrbanArea] = useState([])

  useEffect(() => {
    axios.get(props.location.target)
      .then(res => {
        setUrbanArea(res.data)
        
      })
  }, [])

  return <div>

    {console.log(urbanArea)}
   hello world
  </div>

}

export default UrbanArea