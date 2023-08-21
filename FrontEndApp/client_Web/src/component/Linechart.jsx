import { ResponsiveLine } from '@nivo/line'

const CustomGrid = () => (
    <g>
        <line
        x1={0}
        x2={470}
        y1={60 + -28 * (440 / (75 - 5))}
        y2={60 + -28 * (440 / (75 - 5))}
        stroke="#000000"
        strokeLinecap="round"
        strokeWidth={1}
        strokeDasharray="4 4"
        />
    </g>
)


const Linechart = ({data}) => (
     <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        lineWidth={7}
        enablePoints={false}
        pointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        isInteractive={false}
        enableCrosshair={false}
        useMesh={true}
        legends={[]}
        animate={false}
        layers={['grid', 'axes', 'markers', 'lines', 'points', 'slices', 'crosshair', CustomGrid]}
    />
)

export default Linechart