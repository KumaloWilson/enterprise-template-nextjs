"use client"

import { useEffect, useState } from "react"
import { MetricCard } from "../components/metric-card"
import { RevenueChart } from "../components/revenue-chart"
import { TransactionList } from "../components/transaction-list"
import { ActivityChart } from "../components/activity-chart"
import { DashboardService } from "../services/dashboard-service"
import type { MetricCard as MetricCardType, ChartDataPoint, TransactionItem } from "../types"

export function DashboardScreen() {
  const [metrics, setMetrics] = useState<MetricCardType[]>([])
  const [chartData, setChartData] = useState<ChartDataPoint[]>([])
  const [transactions, setTransactions] = useState<TransactionItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const [metricsData, chartDataResult, transactionsData] = await Promise.all([
          DashboardService.getMetrics(),
          DashboardService.getChartData(),
          DashboardService.getTransactions(),
        ])

        setMetrics(metricsData)
        setChartData(chartDataResult)
        setTransactions(transactionsData)
      } catch (error) {
        console.error("Failed to load dashboard data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        <RevenueChart data={chartData} />
        <ActivityChart />
      </div>

      {/* Transactions */}
      <TransactionList transactions={transactions} />
    </div>
  )
}
