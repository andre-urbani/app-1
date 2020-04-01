import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

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

  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={800} height={800} data={data} >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  );
}

export default RadaChartTest

