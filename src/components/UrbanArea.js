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
            axios.get(urbanAreaImage)
              .then(res => {
                setImageJson(res.data)
              })
          })
      })
  }, [])

  return <div>
    {/* {console.log(urbanArea[image])} */}
    {console.log(imageJson)}
    {/* {urbanArea ?
    
     <div><img src={urbanAreaImage.photos[0].image.web} /> 
     </div> :
   null } */}
  </div>



}

export default UrbanArea