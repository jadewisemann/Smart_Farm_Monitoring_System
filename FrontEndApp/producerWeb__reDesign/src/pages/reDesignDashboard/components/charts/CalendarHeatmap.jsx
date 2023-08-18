// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsiveCalendar } from '@nivo/calendar'

const data = [
  {
    "value": 351,
    "day": "2016-01-12"
  },
  {
    "value": 386,
    "day": "2015-08-28"
  },
  {
    "value": 104,
    "day": "2016-11-15"
  },
  {
    "value": 48,
    "day": "2018-01-24"
  },
  {
    "value": 329,
    "day": "2016-10-16"
  },
]


export const CalendarHeatmap = () => (
    <ResponsiveCalendar
        data={data}
        from="2015-03-01"
        to="2015-07-12"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
)