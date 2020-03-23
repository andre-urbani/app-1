import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'

const Country = (props) => {

  console.log(props.location.state)

  const [country, setCountry] = useState([])

  useEffect(() => {
    axios.get(props.location.target)
      .then(res => {
        setCountry(res.data)
      })
  }, [])

  // function handleClick(e) {
  //   const target = e.target.getAttribute('id')
  //   e.preventDefault()
  //   // setSelectedCountry({
  //   //   link: {target}
  //   // })
  //   props.history.push('/country', target)
  //   console.log(target)
  // }

  return <div className="continents-container">
    <div>
     {country.currency_code}
    </div>


  </div>


}

export default Country