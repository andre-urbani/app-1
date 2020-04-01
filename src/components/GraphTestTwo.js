import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const GraphTestTwo = (props) => {

  



    const data = [
      {
        name: 'Page A', Score: props.test.internet, 
      },
      {
        name: 'Page B', Score: 4, amt: 10
      },
      {
        name: 'Page C', Score: 8, amt: 10
      },
      {
        name: 'Page D', Score: 10, amt: 10
      },
      {
        name: 'Page E', Score: 8, amt: 10
      },
      {
        name: 'Page F', Score: 5, amt: 10
      },
      {
        name: 'Page G', Score: 9, amt: 10
      },
    ];

    return <div>
      {console.log(props.test.internet)}
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
        <Bar dataKey="Score" fill="#82ca9d" minPointSize={10}/>
      </BarChart>
      </div>
    
  }


export default GraphTestTwo