import React, { PureComponent, useState, useEffect } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import axios from 'axios'

const GraphTestTwo = (props) => {

  
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
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Bar dataKey="pv" fill="#8884d8" /> */}
        <Bar dataKey="A" fill="#82ca9d" minPointSize={10}/>
      </BarChart>
      </div>
    
  }


export default GraphTestTwo