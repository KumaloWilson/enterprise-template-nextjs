export interface MetricCard {
  title: string
  value: string
  change: number
  changeLabel: string
  icon?: any
}

export interface ChartDataPoint {
  date: string
  value: number
  label?: string
}

export interface TransactionItem {
  id: string
  title: string
  amount: string
  date: string
  status: "success" | "pending" | "failed"
}
