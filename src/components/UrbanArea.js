import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'
import RadarChartTest from './RadarChartTest';

const UrbanArea = (props) => {

  const image = 'ua:images'

  const uAreas = 'ua:item'

  const [urbanArea, setUrbanArea] = useState([])

  const [urbanAreas, setUrbanAreas] = useState([])

  const [imageJson, setImageJson] = useState([])

  useEffect(() => {
    axios.get(props.location.target)
      .then(res => {
        const uaList = res.data._links
        setUrbanArea(uaList)
        axios.get(res.data._links[image].href)
          .then(res => {
            setImageJson(res.data.photos[0].image)
          })
      })
  }, [])

  const handleClick = useCallback((e) => {
    e.preventDefault()

    axios.get('https://api.teleport.org/api/urban_areas/')
      .then(res => {
        const urbanAreaList = res.data._links[uAreas]
        setUrbanAreas(urbanAreaList)
      })
  }, [])

  return <div>
    {imageJson ?

      <div><img src={imageJson.mobile} />
      </div> :
      null}
    <RadarChartTest urbanArea={urbanArea} />
 
    <button onClick={handleClick}>compare</button>
    {console.log(urbanAreas)}

    <div>
      {urbanAreas.map((urbanArea, i) => {
        
        return <div key={i}><p>>{urbanArea.name}</p>
        </div>
      })}
    </div>

    {/* make a ternary operator which checks if there is anything in urbanAreas. if true then map them to separate divs, if not then null */}
  </div>

  



}

export default UrbanArea