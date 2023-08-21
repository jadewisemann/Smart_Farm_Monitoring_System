import { ResponsiveRadar } from '@nivo/radar'

const data = [
    {
        "조건": "온도 적합률",
        "대저 토마토": 83,
    },
    {
        "조건": "습도 적합률",
        "대저 토마토": 93,
    },
    {
        "조건": "조도 적합률",
        "대저 토마토": 88,
    },
]



const Radar = () => (
    <ResponsiveRadar
        data={data}
        keys={['대저 토마토',]}
        indexBy="조건"
        maxValue={100}
        valueFormat=" >-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        curve="cardinalClosed"
        borderColor={{ from: 'color' }}
        gridLevels={10}
        gridLabelOffset={36}
        dotSize={14}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        enableDotLabel={true}
        dotLabelYOffset={-17}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        animate={false}
        motionConfig="wobbly"
        isInteractive={false}
        
    />
)

export default Radar