
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type {
  ChartConfig,
} from "@/components/ui/chart"

export const description = "A bar chart"

const chartConfig = {
  desktop: {
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

interface IBarChartProps {
  chartData: any[],
  chartTitle?: string,
  chartDescription?: string,
  xAxisDataKey: string,
  barDataKey: string
}

export function ChartBarDefault({chartData, chartTitle, chartDescription, barDataKey, xAxisDataKey}: IBarChartProps) {

  return (
    <Card>
      <CardHeader>
        <CardTitle>{chartTitle && chartTitle}</CardTitle>
        <CardDescription>{chartDescription && chartDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData ? chartData : []}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xAxisDataKey}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey={barDataKey} fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
