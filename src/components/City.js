import React, { useState, useEffect } from 'react';
import axios from 'axios'

const City = (props) => {

  const image = 'ua:images'

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
    {imageJson ?

      <div><img src={imageJson.mobile} />
      </div> :
      null}
    <RadarChartTest urbanArea={urbanArea} />
    {/* <SvgChartTest urbanArea={urbanArea}/> */}
 
    {/* {test ?

      <div>hello
      </div> :
      null} */}
  </div>



}

export default City