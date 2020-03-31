import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'
import GraphTest from './GraphTest';


const UrbanArea = (props) => {

  const image = 'ua:images'

  const [urbanArea, setUrbanArea] = useState([])

  const [imageJson, setImageJson] = useState([])

  const [test, setTest] = useState({
    internet: 8
  })

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
    {/* {console.log(urbanArea[image])} */}
    {console.log(imageJson)}
    {imageJson ?
    
     <div><img src={imageJson.mobile} /> 
     </div> :
   null }
   <GraphTest test={test}/>
  </div>



}

export default UrbanArea