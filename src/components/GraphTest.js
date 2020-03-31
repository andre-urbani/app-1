import React from 'react';
import {XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LabelSeries} from 'react-vis';
import '/Users/andreurbani/development/app-1/node_modules/react-vis/dist/style.css'


const greenData = [{ x: 'A', y: 10 }, { x: 'B', y: 5 }, { x: 'C', y: 15 }];

const labelData = greenData.map((d, idx) => ({
  x: d.x,
  y: Math.max(greenData[idx].y)
}));

const GraphTest= (props) => {

  return<div>
    <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <LabelSeries data={labelData} getLabel={d => d.x} />
    </XYPlot>
  </div>


}

export default GraphTest