import ReactECharts from 'echarts-for-react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { useAppSelector } from 'hooks/reduxTypeHook'

interface Props {
  bottom?: number
  left?: number
  right?: number
  top?: number
  type?: string
}

const ChartContainer = styled(Box)`
  margin-top: 24px;
`

const HistoryChart = ( { bottom = 24, left = 36, right = 8, top = 8 }: Props) => {
  const history = useAppSelector((state) => state.balance.history)

  const options = {
    grid: { top: top, right: right, bottom: bottom, left: left },
    xAxis: {
      type: 'category',
      data: history.map(h => h.date),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: history.map(h => h.value),
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