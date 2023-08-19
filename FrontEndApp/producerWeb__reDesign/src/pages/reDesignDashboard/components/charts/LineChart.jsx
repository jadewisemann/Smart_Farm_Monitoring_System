import { ResponsiveLine } from '@nivo/line'

const data = [
  {
    "id": "japan",
    "color": "hsl(273, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 162
      },
      {
        "x": "helicopter",
        "y": 245
      },
      {
        "x": "boat",
        "y": 78
      },
      {
        "x": "train",
        "y": 8
      },
      {
        "x": "subway",
        "y": 2
      },
      {
        "x": "bus",
        "y": 91
      },
      {
        "x": "car",
        "y": 271
      },
      {
        "x": "moto",
        "y": 203
      },
      {
        "x": "bicycle",
        "y": 154
      },
      {
        "x": "horse",
        "y": 81
      },
      {
        "x": "skateboard",
        "y": 83
      },
      {
        "x": "others",
        "y": 188
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(73, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 226
      },
      {
        "x": "helicopter",
        "y": 288
      },
      {
        "x": "boat",
        "y": 168
      },
      {
        "x": "train",
        "y": 26
      },
      {
        "x": "subway",
        "y": 114
      },
      {
        "x": "bus",
        "y": 242
      },
      {
        "x": "car",
        "y": 78
      },
      {
        "x": "moto",
        "y": 176
      },
      {
        "x": "bicycle",
        "y": 46
      },
      {
        "x": "horse",
        "y": 299
      },
      {
        "x": "skateboard",
        "y": 79
      },
      {
        "x": "others",
        "y": 196
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(261, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 237
      },
      {
        "x": "helicopter",
        "y": 285
      },
      {
        "x": "boat",
        "y": 156
      },
      {
        "x": "train",
        "y": 10
      },
      {
        "x": "subway",
        "y": 66
      },
      {
        "x": "bus",
        "y": 235
      },
      {
        "x": "car",
        "y": 79
      },
      {
        "x": "moto",
        "y": 36
      },
      {
        "x": "bicycle",
        "y": 22
      },
      {
        "x": "horse",
        "y": 57
      },
      {
        "x": "skateboard",
        "y": 101
      },
      {
        "x": "others",
        "y": 85
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(305, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 184
      },
      {
        "x": "helicopter",
        "y": 21
      },
      {
        "x": "boat",
        "y": 41
      },
      {
        "x": "train",
        "y": 249
      },
      {
        "x": "subway",
        "y": 10
      },
      {
        "x": "bus",
        "y": 160
      },
      {
        "x": "car",
        "y": 136
      },
      {
        "x": "moto",
        "y": 152
      },
      {
        "x": "bicycle",
        "y": 160
      },
      {
        "x": "horse",
        "y": 126
      },
      {
        "x": "skateboard",
        "y": 226
      },
      {
        "x": "others",
        "y": 129
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(251, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 205
      },
      {
        "x": "helicopter",
        "y": 43
      },
      {
        "x": "boat",
        "y": 204
      },
      {
        "x": "train",
        "y": 101
      },
      {
        "x": "subway",
        "y": 268
      },
      {
        "x": "bus",
        "y": 232
      },
      {
        "x": "car",
        "y": 103
      },
      {
        "x": "moto",
        "y": 220
      },
      {
        "x": "bicycle",
        "y": 104
      },
      {
        "x": "horse",
        "y": 244
      },
      {
        "x": "skateboard",
        "y": 206
      },
      {
        "x": "others",
        "y": 193
      }
    ]
  }
]

const LineChart = () => (
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
        yFormat=" >-.2f"
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
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
        colors={{ scheme: 'category10' }}
        lineWidth={1}
        pointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabelYOffset={-24}
        enableArea={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)
export default LineChart