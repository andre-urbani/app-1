import React, { useState } from 'react';
import { XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LabelSeries, VerticalBarSeriesCanvas, VerticalBarSeries  } from 'react-vis';
import '/Users/andreurbani/development/app-1/node_modules/react-vis/dist/style.css'


const greenData = [{ x: 'A', y: 5 }, { x: 'B', y: 5 }, { x: 'C', y: 15 }];
// const blueData = [{x: 'A', y: 12}, {x: 'B', y: 2}, {x: 'C', y: 11}];

const labelData = greenData.map((d, idx) => ({
  x: d.x,
  y: Math.max(greenData[idx].y)
}));

const GraphTest = (props) => {

  const [useCanvas, setUseCanvas] = useState(false)

 
  const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
  const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
  return (
    <div>
      <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <BarSeries className="vertical-bar-series-example" data={greenData} />
        {/* <BarSeries data={blueData} /> */}
        <LabelSeries data={labelData} getLabel={d => d.x} />
      </XYPlot>
    </div>
  );
}




export default GraphTest

