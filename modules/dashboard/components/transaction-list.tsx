import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { TransactionItem } from "../types"

interface TransactionListProps {
  transactions: TransactionItem[]
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Latest activity from your account</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{transaction.title}</p>
                <p className="text-sm text-muted-foreground">{transaction.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">{transaction.amount}</span>
                <Badge
                  variant={transaction.status === "success" ? "default" : "secondary"}
                  className={cn(
                    transaction.status === "success" &&
                      "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-400",
                    transaction.status === "pending" &&
                      "bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-400",
                    transaction.status === "failed" && "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-400",
                  )}
                >
                  {transaction.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
