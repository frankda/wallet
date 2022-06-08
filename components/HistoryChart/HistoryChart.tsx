import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'
import ReactECharts from 'echarts-for-react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const ChartContainer = styled(Box)`
  margin-top: 24px;
`

const HistoryChart = () => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [ 820, 932, 901, 934, 1290, 1330, 1320 ],
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  }
  return (
    <ChartContainer>
      <ReactECharts option={options} />
    </ChartContainer>
  )
}

export default HistoryChart