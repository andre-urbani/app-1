import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'
import RadarChartTest from './RadarChartTest';
import GraphTestTwo from './GraphTestTwo';
import SvgChartTest from './SvgChartTest'


const UrbanArea = (props) => {

  const image = 'ua:images'

  const score = 'ua:scores'

  const [urbanArea, setUrbanArea] = useState([])

  const [imageJson, setImageJson] = useState([])

  // const [test, setTest] = useState([])



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

  return <div>
    {/* {imageJson ?

      <div><img src={imageJson.mobile} />
      </div> :
      null} */}
    <RadarChartTest urbanArea={urbanArea} />
    {/* <SvgChartTest urbanArea={urbanArea}/> */}
 
    {/* {test ?

      <div>hello
      </div> :
      null} */}
  </div>



}

export default UrbanArea