import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'


const UrbanArea = (props) => {

  const image = 'ua:images'

  const [urbanArea, setUrbanArea] = useState([])

  const [urbanAreaImage, setUrbanAreaImage] = useState([])

  useEffect(() => {
    axios.get(props.location.target)
      .then(res => {
        const uaList = res.data._links
        setUrbanArea(uaList)
        axios.get(urbanArea[image])
        .then(res => {
          const uaImage = res.data._links[image]
          setUrbanAreaImage(uaImage)
          
          
        })
        
      })
  }, [])

  return <div>
    {/* {console.log(urbanArea[image])} */}
    {console.log(urbanAreaImage)}
   {/* {urbanArea ?
    
     <div><img src={urbanAreaImage[image].href} /> 
     </div> :
   null } */}
  </div>

  

}

export default UrbanArea