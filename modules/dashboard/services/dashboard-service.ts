import type { MetricCard, ChartDataPoint, TransactionItem } from "../types"

export class DashboardService {
  static async getMetrics(): Promise<MetricCard[]> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    return [
      {
        title: "Total Revenue",
        value: "$45,231.89",
        change: 20.1,
        changeLabel: "from last month",
      },
      {
        title: "Active Users",
        value: "2,350",
        change: 15.3,
        changeLabel: "from last month",
      },
      {
        title: "Conversion Rate",
        value: "12.5%",
        change: -4.3,
        changeLabel: "from last month",
      },
      {
        title: "Avg. Session",
        value: "4m 32s",
        change: 8.2,
        changeLabel: "from last month",
      },
    ]
  }

  static async getChartData(): Promise<ChartDataPoint[]> {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const data: ChartDataPoint[] = []
    const now = new Date()

    for (let i = 30; i >= 0; i--) {
      const date = new Date(now)
      date.setDate(date.getDate() - i)
      data.push({
        date: date.toISOString().split("T")[0],
        value: Math.floor(Math.random() * 5000) + 15000,
      })
    }

    return data
  }

  static async getTransactions(): Promise<TransactionItem[]> {
    await new Promise((resolve) => setTimeout(resolve, 500))

    return [
      {
        id: "1",
        title: "Payment from #1598",
        amount: "$300",
        date: "Feb 21, 2025, 3:30pm",
        status: "success",
      },
      {
        id: "2",
        title: "Process to #85236",
        amount: "$300",
        date: "March 14, 2025, 2:30pm",
        status: "pending",
      },
      {
        id: "3",
        title: "Process refund #4568",
        amount: "$300",
        date: "March 18, 2025, 6:30pm",
        status: "success",
      },
      {
        id: "4",
        title: "Payment failed from #32658",
        amount: "$300",
        date: "April 27, 2025, 3:30pm",
        status: "failed",
      },
    ]
  }
}
