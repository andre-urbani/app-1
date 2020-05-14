import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'
import RadarChartTest from './RadarChartTest';

const UrbanArea = (props) => {

  const score = 'ua:scores'

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

  const handleClick = useCallback(() => {

    axios.get('https://api.teleport.org/api/urban_areas/')
      .then(res => {
        const urbanAreaList = res.data._links[uAreas]
        setUrbanAreas(urbanAreaList)
      })
  }, [])

  const handleUAreaClick = useCallback(() => {

    // if (scores !== undefined) {
    //   axios.get(urbanAreas[score].href)
    //     .then(res => {
    //       setHousing(res.data.categories[0])
    //       setCostOfLiving(res.data.categories[1])
    //       setCommute(res.data.categories[5])
    //       setSafety(res.data.categories[7])
    //       setEducation(res.data.categories[9])
    //       setEnvironment(res.data.categories[10])
    //       setEconomy(res.data.categories[11])
    //       setLeisure(res.data.categories[14])
    //       setTolerance(res.data.categories[15])
    //       setOutdoor(res.data.categories[16])
    //       setSummary(res.data.summary)
    //     })
    // }
  }, [])


  return <div>

    {console.log(urbanAreas)}
    {imageJson ?

      <div><img src={imageJson.mobile} />
      </div> :
      null}
    <RadarChartTest urbanArea={urbanArea} />
 
    <button onClick={handleClick}>compare</button>

    {urbanAreas ? (
    <div>
      {urbanAreas.map((urbArea, i) => {
        return <div key={i}><p onClick={handleUAreaClick}>{urbArea.name}</p>
        </div>
      })}
    </div>
    ) : null}

  </div>

  



}

export default UrbanArea