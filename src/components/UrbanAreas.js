import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { Link } from 'react-router-dom'

const UrbanAreas = () => {

  const uAreas = 'ua:item'

  const [urbanAreas, setUrbanAreas] = useState([])

  useEffect(() => {
    axios.get('https://api.teleport.org/api/urban_areas/')
      .then(res => {
        const urbanAreaList = res.data._links[uAreas]
        setUrbanAreas(urbanAreaList)
      })
  }, [])

  return <div className="continents-container">
    <div>
      {urbanAreas.map((urbanArea, i) => {
        const target = urbanArea.href
        return <div key={i}><p><Link
        to={{
          pathname: '/urbanarea',
          target
        }}>{urbanArea.name}</Link></p>
        </div>
      })}
    </div>


  </div>


}

export default UrbanAreas