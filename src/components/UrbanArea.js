import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'


const UrbanArea = (props) => {

  const image = 'ua:images'

  const [urbanArea, setUrbanArea] = useState([])

  const [urbanAreaImage, setUrbanAreaImage] = useState([])

  const [imageJson, setImageJson] = useState([])

  useEffect(() => {
    axios.get(props.location.target)
      .then(res => {
        const uaList = res.data._links
        setUrbanArea(uaList)
        axios.get(props.location.target)
          .then(res => {
            const uaImage = res.data._links[image].href
            setUrbanAreaImage(uaImage)
            axios.get(res.data._links[image].href)
              .then(res => {
                setImageJson(res.data.photos[0].image)
              })
          })
      })
  }, [])

  return <div>
    {/* {console.log(urbanArea[image])} */}
    {console.log(imageJson)}
    {imageJson ?
    
     <div><img src={imageJson.web} /> 
     </div> :
   null }
  </div>



}

export default UrbanArea