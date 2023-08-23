import { ResponsivePie } from '@nivo/pie'

const data =
[
  {
    "id": "Healthy",
    "label": "Healthy",
    "value": 824,
    "color": "hsl(20, 70%, 50%)"
  },
  {
    "id": "little brown leaf",
    "label": "little brown leaf",
    "value": 372,
    "color": "hsl(340, 70%, 50%)"
  },
  {
    "id": "illness",
    "label": "illness",
    "value": 385,
    "color": "hsl(314, 70%, 50%)"
  },
  {
    "id": "weed",
    "label": "weed",
    "value": 257,
    "color": "hsl(20, 70%, 50%)"
  },
  {
    "id": "bugs",
    "label": "bugs",
    "value": 169,
    "color": "hsl(327, 70%, 50%)"
  }
]



const PieChart = () => (
    <ResponsivePie
        theme={{
            labels: {
                text: {
                    fontSize: 16,

                },
            },
        }}
        data={data}
        margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
        startAngle={-8}
        sortByValue={true}
        innerRadius={0}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'pastel2' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={4}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    12
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            
        ]}
    />
) 

export default PieChart