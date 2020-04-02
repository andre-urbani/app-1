import React, { PureComponent, useEffect, useState, useCallback } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import axios from 'axios'

const RadaChartTest = (props) => {


  const score = 'ua:scores'

  const [test, setTest] = useState([])


  useEffect(() => {
    if (props.urbanArea[score] !== undefined) {
      axios.get(props.urbanArea[score].href)
        .then(res => {
          setHousing(res.data.categories[0])
          setCostOfLiving(res.data.categories[1])
          setCommute(res.data.categories[5])
          setSafety(res.data.categories[7])
          setEducation(res.data.categories[9])
          setEnvironment(res.data.categories[10])
          setEconomy(res.data.categories[11])
          setLeisure(res.data.categories[14])
          setTolerance(res.data.categories[15])
          setOutdoor(res.data.categories[16])
        })
    }
  }, [props.urbanArea[score]])

  

  const [housing, setHousing] = useState([]) 
  const [costOfLiving, setCostOfLiving] = useState([])
  const [commute, setCommute] = useState([])
  const [safety, setSafety] = useState([])
  const [education, setEducation] = useState([])
  const [environment, setEnvironment] = useState([])
  const [economy, setEconomy] = useState([])
  const [leisure, setLeisure] = useState([])
  const [tolerance, setTolerance] = useState([])
  const [outdoor, setOutdoor] = useState([])


  const data = [
    {
      subject: housing.name, A: housing.score_out_of_10, fullMark: 15,
    },
    {
      subject: costOfLiving.name, A: costOfLiving.score_out_of_10, fullMark: 15,
    },
    {
      subject: commute.name, A: commute.score_out_of_10, fullMark: 15,
    },
    {
      subject: safety.name, A: safety.score_out_of_10, fullMark: 15,
    },
    {
      subject: education.name, A: education.score_out_of_10, fullMark: 15,
    },
    {
      subject: environment.name, A: environment.score_out_of_10, fullMark: 15,
    },
    {
      subject: economy.name, A: economy.score_out_of_10, fullMark: 15,
    },
    {
      subject: leisure.name, A: leisure.score_out_of_10, fullMark: 15,
    },
    {
      subject: tolerance.name, A: tolerance.score_out_of_10, fullMark: 15,
    },
    {
      subject: outdoor.name, A: outdoor.score_out_of_10, fullMark: 15,
    },

  ];



  
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
    {console.log(housing.name)}
    <RadarChart cx={300} cy={250} outerRadius={150} width={800} height={800} data={data} >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  </div>
}


export default RadaChartTest
