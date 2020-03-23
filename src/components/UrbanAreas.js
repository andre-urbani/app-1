import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'

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
    {console.log(urbanAreas)}

    <div>
      {urbanAreas.map((urbanArea, i) => {
        return <div key={i}>{urbanArea.name}
        </div>
      })}
    </div>


  </div>


}

export default UrbanAreas