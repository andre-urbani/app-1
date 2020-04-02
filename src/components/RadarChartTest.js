import React, { PureComponent, useEffect, useState, useCallback } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import axios from 'axios'

const RadaChartTest = (props) => {

  const data = [
    {
      subject: 'Housing', A: 2, fullMark: 15,
    },
    {
      subject: 'Cost of Living', A: 8.2, fullMark: 15,
    },
    {
      subject: 'Commute', A: 6, fullMark: 15,
    },
    {
      subject: 'Safety', A: 8, fullMark: 15,
    },
    {
      subject: 'Education', A: 7.3, fullMark: 15,
    },
    {
      subject: 'Environmental Quality', A: 6.8, fullMark: 15,
    },
    {
      subject: 'Economy', A: 8.3, fullMark: 15,
    },
    {
      subject: 'Leisure & Culture', A: 5.4, fullMark: 15,
    },
    {
      subject: 'Tolerance', A: 4, fullMark: 15,
    },
    {
      subject: 'Outdoor', A: 7, fullMark: 15,
    },

  ];

  // const href = 'href'
  const score = 'ua:scores'

  const [test, setTest] = useState([])




  useEffect(() => {
    if (props.urbanArea[score] !== undefined) {
      axios.get(props.urbanArea[score].href)
        .then(res => {
          setTest(res.data)
        })
    }
  }, [props.urbanArea[score]])



  
    // useEffect(() => {

    //   axios.get(props.urbanArea[score].href)
    //     .then(res => {
    //       setTest(res.data)
    //     })

    //   console.log(test)

    // }, [])


  if (props.urbanArea[score] === undefined) {
    return <div className="loading-container">Loading...</div>
  }



  return <div>
    {/* {console.log(props.urbanArea[score].href)} */}
    {console.log(test)}
    <RadarChart cx={300} cy={250} outerRadius={150} width={800} height={800} data={data} >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  </div>
}


export default RadaChartTest

