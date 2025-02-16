import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, CreditCard, PiggyBank, BarChart } from "lucide-react"
import Link from "next/link"

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <Link href="/dashboard/checking-accounts" passHref>
          <Button variant="outline" className="flex flex-col items-center justify-center h-24 w-full">
            <CreditCard className="h-6 w-6 mb-2" />
            Checking Accounts
          </Button>
        </Link>
        <Link href="/dashboard/my-cards" passHref>
          <Button variant="outline" className="flex flex-col items-center justify-center h-24 w-full">
            <span className="text-2xl mb-2">💳</span>
            My Cards
          </Button>
        </Link>
        <Link href="/transfer" passHref>
          <Button variant="outline" className="flex flex-col items-center justify-center h-24 w-full">
            <Send className="h-6 w-6 mb-2" />
            Transfer
          </Button>
        </Link>
        <Link href="/savings" passHref>
          <Button variant="outline" className="flex flex-col items-center justify-center h-24 w-full">
            <PiggyBank className="h-6 w-6 mb-2" />
            Savings
          </Button>
        </Link>
        <Link href="/investments" passHref>
          <Button variant="outline" className="flex flex-col items-center justify-center h-24 w-full">
            <BarChart className="h-6 w-6 mb-2" />
            Investments
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

