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

  // const handleClick = useCallback((e) => {
  //   e.preventDefault()

  //   axios.get('https://api.teleport.org/api/urban_areas/')
  //     .then(res => {
  //       const urbanAreaList = res.data._links[uAreas]
  //       setUrbanAreas(urbanAreaList)
  //     })
  //     console.log('hello')
  // }, [])

  function handleClick() {
    console.log('hello')
  }

  return <div>
    {imageJson ?

      <div><img src={imageJson.mobile} />
      </div> :
      null}
    <RadarChartTest urbanArea={urbanArea} />
 
    <button onCLick={() => handleClick }>compare</button>
    {console.log(urbanAreas)}
  </div>

  



}

export default UrbanArea