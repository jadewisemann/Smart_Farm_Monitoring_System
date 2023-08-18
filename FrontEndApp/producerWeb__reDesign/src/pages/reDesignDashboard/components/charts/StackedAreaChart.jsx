import { ResponsiveLine } from '@nivo/line'


const data = [
  {
    "id": "japan",
    "color": "hsl(116, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 185
      },
      {
        "x": "helicopter",
        "y": 63
      },
      {
        "x": "boat",
        "y": 34
      },
      {
        "x": "train",
        "y": 139
      },
      {
        "x": "subway",
        "y": 265
      },
      {
        "x": "bus",
        "y": 76
      },
      {
        "x": "car",
        "y": 203
      },
      {
        "x": "moto",
        "y": 3
      },
      {
        "x": "bicycle",
        "y": 150
      },
      {
        "x": "horse",
        "y": 299
      },
      {
        "x": "skateboard",
        "y": 178
      },
      {
        "x": "others",
        "y": 142
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(275, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 7
      },
      {
        "x": "helicopter",
        "y": 239
      },
      {
        "x": "boat",
        "y": 72
      },
      {
        "x": "train",
        "y": 108
      },
      {
        "x": "subway",
        "y": 91
      },
      {
        "x": "bus",
        "y": 276
      },
      {
        "x": "car",
        "y": 16
      },
      {
        "x": "moto",
        "y": 13
      },
      {
        "x": "bicycle",
        "y": 5
      },
      {
        "x": "horse",
        "y": 53
      },
      {
        "x": "skateboard",
        "y": 193
      },
      {
        "x": "others",
        "y": 185
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(31, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 137
      },
      {
        "x": "helicopter",
        "y": 150
      },
      {
        "x": "boat",
        "y": 161
      },
      {
        "x": "train",
        "y": 138
      },
      {
        "x": "subway",
        "y": 184
      },
      {
        "x": "bus",
        "y": 292
      },
      {
        "x": "car",
        "y": 282
      },
      {
        "x": "moto",
        "y": 75
      },
      {
        "x": "bicycle",
        "y": 182
      },
      {
        "x": "horse",
        "y": 132
      },
      {
        "x": "skateboard",
        "y": 285
      },
      {
        "x": "others",
        "y": 267
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(210, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 226
      },
      {
        "x": "helicopter",
        "y": 236
      },
      {
        "x": "boat",
        "y": 209
      },
      {
        "x": "train",
        "y": 124
      },
      {
        "x": "subway",
        "y": 268
      },
      {
        "x": "bus",
        "y": 196
      },
      {
        "x": "car",
        "y": 240
      },
      {
        "x": "moto",
        "y": 190
      },
      {
        "x": "bicycle",
        "y": 108
      },
      {
        "x": "horse",
        "y": 56
      },
      {
        "x": "skateboard",
        "y": 185
      },
      {
        "x": "others",
        "y": 145
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(5, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 50
      },
      {
        "x": "helicopter",
        "y": 107
      },
      {
        "x": "boat",
        "y": 247
      },
      {
        "x": "train",
        "y": 6
      },
      {
        "x": "subway",
        "y": 248
      },
      {
        "x": "bus",
        "y": 212
      },
      {
        "x": "car",
        "y": 150
      },
      {
        "x": "moto",
        "y": 173
      },
      {
        "x": "bicycle",
        "y": 260
      },
      {
        "x": "horse",
        "y": 214
      },
      {
        "x": "skateboard",
        "y": 146
      },
      {
        "x": "others",
        "y": 152
      }
    ]
  }
]


export const StackAreaChart = () => (
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
        curve="natural"
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
        colors={{ scheme: 'category10' }}
        pointSize={2}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ theme: 'background' }}
        pointLabelYOffset={-16}
        enableArea={true}
        areaBlendMode="difference"
        areaOpacity={0.35}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 94,
                translateY: 0,
                itemsSpacing: 46,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 25,
                itemOpacity: 0.75,
                symbolSize: 14,
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