
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  footerTitle?: string,
  footerDescription?: string,
  xAxisDataKey: string,
  barDataKey: string
}

export function ChartBarDefault({chartData, chartTitle, chartDescription, footerTitle, footerDescription, barDataKey, xAxisDataKey}: IBarChartProps) {

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
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          {footerTitle && footerTitle} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          {footerDescription && footerDescription}
        </div>
      </CardFooter> */}
    </Card>
  )
}
