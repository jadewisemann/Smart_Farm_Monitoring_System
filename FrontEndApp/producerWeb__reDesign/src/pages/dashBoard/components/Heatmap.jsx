
import { ResponsiveHeatMap } from '@nivo/heatmap'

const data = [
  {
    "id": "Japan",
    "data": [
      {
        "x": "Train",
        "y": -60492
      },
      {
        "x": "Subway",
        "y": 51818
      },
      {
        "x": "Bus",
        "y": -85897
      },
      {
        "x": "Car",
        "y": -22252
      },
      {
        "x": "Boat",
        "y": 89449
      },
      {
        "x": "Moto",
        "y": 70294
      },
      {
        "x": "Moped",
        "y": 13432
      },
      {
        "x": "Bicycle",
        "y": -11399
      },
      {
        "x": "Others",
        "y": 60601
      }
    ]
  },
  {
    "id": "France",
    "data": [
      {
        "x": "Train",
        "y": 88206
      },
      {
        "x": "Subway",
        "y": -69963
      },
      {
        "x": "Bus",
        "y": 35241
      },
      {
        "x": "Car",
        "y": -72472
      },
      {
        "x": "Boat",
        "y": -32198
      },
      {
        "x": "Moto",
        "y": -37792
      },
      {
        "x": "Moped",
        "y": 17574
      },
      {
        "x": "Bicycle",
        "y": -60120
      },
      {
        "x": "Others",
        "y": -30761
      }
    ]
  },
  {
    "id": "US",
    "data": [
      {
        "x": "Train",
        "y": 30842
      },
      {
        "x": "Subway",
        "y": -86476
      },
      {
        "x": "Bus",
        "y": 25046
      },
      {
        "x": "Car",
        "y": 84648
      },
      {
        "x": "Boat",
        "y": -86843
      },
      {
        "x": "Moto",
        "y": 58693
      },
      {
        "x": "Moped",
        "y": 17394
      },
      {
        "x": "Bicycle",
        "y": -8773
      },
      {
        "x": "Others",
        "y": 99697
      }
    ]
  },
  {
    "id": "Germany",
    "data": [
      {
        "x": "Train",
        "y": -57832
      },
      {
        "x": "Subway",
        "y": -44747
      },
      {
        "x": "Bus",
        "y": -76567
      },
      {
        "x": "Car",
        "y": 44215
      },
      {
        "x": "Boat",
        "y": -5595
      },
      {
        "x": "Moto",
        "y": 208
      },
      {
        "x": "Moped",
        "y": 30249
      },
      {
        "x": "Bicycle",
        "y": 10485
      },
      {
        "x": "Others",
        "y": 76321
      }
    ]
  },
  {
    "id": "Norway",
    "data": [
      {
        "x": "Train",
        "y": 44370
      },
      {
        "x": "Subway",
        "y": -32196
      },
      {
        "x": "Bus",
        "y": 14013
      },
      {
        "x": "Car",
        "y": 68000
      },
      {
        "x": "Boat",
        "y": 59822
      },
      {
        "x": "Moto",
        "y": -52564
      },
      {
        "x": "Moped",
        "y": 45162
      },
      {
        "x": "Bicycle",
        "y": 15363
      },
      {
        "x": "Others",
        "y": -86975
      }
    ]
  },
  {
    "id": "Iceland",
    "data": [
      {
        "x": "Train",
        "y": -58275
      },
      {
        "x": "Subway",
        "y": 94723
      },
      {
        "x": "Bus",
        "y": -43234
      },
      {
        "x": "Car",
        "y": -93269
      },
      {
        "x": "Boat",
        "y": -26541
      },
      {
        "x": "Moto",
        "y": -32837
      },
      {
        "x": "Moped",
        "y": -89947
      },
      {
        "x": "Bicycle",
        "y": -31163
      },
      {
        "x": "Others",
        "y": 29562
      }
    ]
  },
  {
    "id": "UK",
    "data": [
      {
        "x": "Train",
        "y": 65163
      },
      {
        "x": "Subway",
        "y": -35627
      },
      {
        "x": "Bus",
        "y": -46339
      },
      {
        "x": "Car",
        "y": 80327
      },
      {
        "x": "Boat",
        "y": -79833
      },
      {
        "x": "Moto",
        "y": 72696
      },
      {
        "x": "Moped",
        "y": -513
      },
      {
        "x": "Bicycle",
        "y": 1728
      },
      {
        "x": "Others",
        "y": 37460
      }
    ]
  },
  {
    "id": "Vietnam",
    "data": [
      {
        "x": "Train",
        "y": 29168
      },
      {
        "x": "Subway",
        "y": 54384
      },
      {
        "x": "Bus",
        "y": 88476
      },
      {
        "x": "Car",
        "y": 68023
      },
      {
        "x": "Boat",
        "y": -20121
      },
      {
        "x": "Moto",
        "y": 98806
      },
      {
        "x": "Moped",
        "y": -77467
      },
      {
        "x": "Bicycle",
        "y": -3102
      },
      {
        "x": "Others",
        "y": 8211
      }
    ]
  }
]

export const Heatmap = () => (
    <ResponsiveHeatMap
        data={data}
        margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
        valueFormat=">-.2s"
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -90,
            legend: '',
            legendOffset: 46
        }}
        axisRight={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 70
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: -72
        }}
        colors={{
            type: 'diverging',
            scheme: 'red_yellow_blue',
            divergeAt: 0.5,
            minValue: -100000,
            maxValue: 100000
        }}
        emptyColor="#555555"
        legends={[
            {
                anchor: 'bottom',
                translateX: 0,
                translateY: 30,
                length: 400,
                thickness: 8,
                direction: 'row',
                tickPosition: 'after',
                tickSize: 3,
                tickSpacing: 4,
                tickOverlap: false,
                tickFormat: '>-.2s',
                title: 'Value →',
                titleAlign: 'start',
                titleOffset: 4
            }
        ]}
    />
)