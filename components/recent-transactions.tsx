import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon, ArrowRight } from "lucide-react"
import { transactions } from "@/utils/transactions"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RecentTransactions() {
  const recentTransactions = transactions.slice(0, 5) // Show only the 5 most recent transactions

  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Transactions</CardTitle>
        <Link href="/transactions">
          <Button variant="ghost" size="sm" className="gap-2">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {recentTransactions.map((transaction) => (
            <li key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${transaction.type === "credit" ? "bg-green-100" : "bg-red-100"}`}>
                  {transaction.type === "credit" ? (
                    <ArrowUpIcon className="h-4 w-4 text-green-600" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4 text-red-600" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">
                    {transaction.date} {transaction.time}
                  </p>
                  <p className="text-xs text-muted-foreground">{transaction.transactionNumber}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-semibold ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}>
                  {transaction.type === "credit" ? "+" : "-"}${transaction.amount.toLocaleString()}
                </div>
                <div className={`text-xs ${transaction.status === "pending" ? "text-yellow-600" : "text-green-600"}`}>
                  {transaction.status}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

