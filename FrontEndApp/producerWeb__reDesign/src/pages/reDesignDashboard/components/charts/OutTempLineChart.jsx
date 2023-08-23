import { ResponsiveLine } from '@nivo/line'

const defData = [
  {
    "id": "out side temperature",
    "color": "hsl(273, 70%, 50%)",
    "data": [
      {"x": "-36", "y": 28},
      {"x": "-35", "y": 24},
      {"x": "-34", "y": 21},
      {"x": "-33", "y": 26},
      {"x": "-32", "y": 30},
      {"x": "-31", "y": 33},
      {"x": "-30", "y": 27},
      {"x": "-29", "y": 20},
      {"x": "-28", "y": 23},
      {"x": "-27", "y": 30},
      {"x": "-26", "y": 32},
      {"x": "-25", "y": 25},
      {"x": "-24", "y": 20},
      {"x": "-23", "y": 29},
      {"x": "-22", "y": 31},
      {"x": "-21", "y": 28},
      {"x": "-20", "y": 22},
      {"x": "-19", "y": 28},
      {"x": "-18", "y": 26},
      {"x": "-17", "y": 34},
      {"x": "-16", "y": 32},
      {"x": "-15", "y": 21},
      {"x": "-14", "y": 29},
      {"x": "-13", "y": 24},
      {"x": "-12", "y": 35},
      {"x": "-11", "y": 20},
      {"x": "-10", "y": 26},
      {"x": -"9", "y": 32},
      {"x": -"8", "y": 29},
      {"x": -"7", "y": 23},
      {"x": -"6", "y": 25},
      {"x": -"5", "y": 30},
      {"x": -"4", "y": 24},
      {"x": -"3", "y": 22},
      {"x": -"2", "y": 32},
      {"x": -"1", "y": 19},
    ]
  },
];


const OutTempLineChart = ({data = defData}) => (
  <ResponsiveLine
    areaBaselineValue={20}
        data={data}
        margin={{ top: 0, right: 20, bottom: 20, left: 30 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'data',
            legendOffset: -40,
            legendPositiorn: 'middle'
        }}
        enableGridX={false}
        colors={{ scheme: 'category10' }}
        lineWidth={1}
        pointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabelYOffset={-24}
        enableArea={true}
        useMesh={true}
        legends={[ ]}
    />
)
export default OutTempLineChart