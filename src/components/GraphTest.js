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

  const greenData = [{ x: 'Housing', y: props.test.internet }, { x: 'Cost of Living', y: 5 }, { x: 'Commute', y: 3 }, { x: 'Safety', y: 3 }, { x: 'Education', y: 3 }, { x: 'Economy', y: 3 }, { x: 'Leisure & Culture', y: 3 }, { x: 'Tolerance', y: 3 }, { x: 'Outdoors', y: 3 }];

 
  // const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
  const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
  return (
    <div>
      <XYPlot xType="ordinal" width={750} height={500} xDistance={100}>
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

