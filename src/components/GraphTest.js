import React from 'react';

// import {
//   XYPlot,
//   XAxis,
//   YAxis,
//   VerticalGridLines,
//   HorizontalGridLines,
//   LineMarkSeries
// } from 'index';

import '/Users/andreurbani/development/app-1/node_modules/react-vis/dist/style.css';
import {XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineMarkSeries } from 'react-vis';

const GraphTest = () => {
  return (
    <XYPlot width={300} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <LineMarkSeries
        className="linemark-series-example"
        style={{
          strokeWidth: '3px'
        }}
        lineStyle={{stroke: 'red'}}
        markStyle={{stroke: 'blue'}}
        data={[{x: 'hello', y: 10}, {x: 'hi', y: 5}, {x: 'hey', y: 15}]}
      />
      <LineMarkSeries
        className="linemark-series-example-2"
        curve={'curveMonotoneX'}
        data={[{x: 'hello', y: 11}, {x: 'hi', y: 29}, {x: 'hello', y: 7}]}
      />
    </XYPlot>
  );
}

export default GraphTest