import React, { useState } from 'react';
import { XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LabelSeries, VerticalBarSeriesCanvas, VerticalBarSeries  } from 'react-vis';
import '../style.css'



// const blueData = [{x: 'A', y: 12}, {x: 'B', y: 2}, {x: 'C', y: 11}];

// const labelData = greenData.map((d, idx) => ({
//   x: d.x,
//   y: Math.max(greenData[idx].y)
// }));

const GraphTest = (props) => {

  const [useCanvas, setUseCanvas] = useState(false)

  const greenData = [{ x: 'Internet', y: props.test.internet }, { x: 'Lifestyle', y: 5 }, { x: 'Cost of Living', y: 15 }];

 
  // const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
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
        <LabelSeries getLabel={d => d.x} />
      </XYPlot>
    </div>
  );
}




export default GraphTest

