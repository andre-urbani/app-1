import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
  {
    subject: 'Housing', A: 10, fullMark: 10,
  },
  {
    subject: 'Cost of Living', A: 8.2, fullMark: 10,
  },
  {
    subject: 'Startups', A: 4.6, fullMark: 10,
  },
  {
    subject: 'Venture Capital', A: 7, fullMark: 10,
  },
  {
    subject: 'Travel Connectivity', A: 6.8, fullMark: 10,
  },
  {
    subject: 'Commute', A: 6, fullMark: 10,
  },
  {
    subject: 'Business Freedom', A: 3, fullMark: 10,
  },
  {
    subject: 'Safety', A: 8, fullMark: 10,
  },
  {
    subject: 'Healthcare', A: 4, fullMark: 10,
  },
  {
    subject: 'Education', A: 7.3, fullMark: 10,
  },
  {
    subject: 'Environmental Quality', A: 6.8, fullMark: 10,
  },
  {
    subject: 'Internet Access', A: 5.55, fullMark: 10,
  },
  {
    subject: 'Taxation', A: 9.2, fullMark: 10,
  },
  {
    subject: 'Economy', A: 8.3, fullMark: 10,
  },
  {
    subject: 'Leisure & Culture', A: 5.4, fullMark: 10,
  },
  {
    subject: 'Tolerance', A: 4, fullMark: 10,
  },
  {
    subject: 'Outdoor', A: 7, fullMark: 10,
  },
  
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';

  render() {
    return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={800} height={800} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    );
  }
}
