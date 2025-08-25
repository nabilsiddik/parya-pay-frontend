import { ChartBarDefault } from "@/components/charts/BarChart"
import { Card } from "@/components/ui/card"
import { useGetAllTransactionsQuery } from "@/redux/features/transaction/transaction.api"
import { useGetAllAgentsQuery, useGetAllUsersQuery } from "@/redux/features/user/user.api"
import { Coins, UserIcon, WalletIcon } from "lucide-react"

const Analytics = () => {

  const { data: allUsers } = useGetAllUsersQuery(undefined)
  const { data: allAgents } = useGetAllAgentsQuery(undefined)
  const { data: allTransactions } = useGetAllTransactionsQuery(undefined)

  // Total transaction amount
  const totalTransactionAmount = allTransactions?.data.reduce((sum: number, transaction: any) => sum + Number(transaction?.totalAmountWithCharge || 0), 0)

  // Total Profit amount for payra pay
  const totalProfitAmount = allTransactions?.data.reduce((sum: number, transaction: any) => sum + Number(transaction?.payraPayGot || 0), 0)


  // create bar chart data for transaction types
  const totalsByType: Record<string, number> = {};
  allTransactions?.data.forEach((transaction: any) => {
    if (!totalsByType[transaction.type]) {
      totalsByType[transaction.type] = 0;
    }
    totalsByType[transaction.type] += transaction.amount;
  });

  const tranAmountByTypeChartData = Object.entries(totalsByType).map(([type, total], index) => ({
    type,
    amount: total,
    fill: `var(--chart-${index + 1})`
  }));


  // create bar chart data for user registration
  const totalsByDate: Record<string, number> = {};

  allUsers?.data?.forEach((user: any) => {
    const date = new Date(user.createdAt).toISOString().split("T")[0];

    if (!totalsByDate[date]) {
      totalsByDate[date] = 0;
    }
    totalsByDate[date] += 1;
  });

  const usersByDateChartData = Object.entries(totalsByDate).map(([date, count], index) => ({
    date,
    count,
    fill: `var(--chart-${index + 1})`
  }));


  console.log('reg data', usersByDateChartData)

  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-4">
        <Card className="px-10">
          <div className="flex items-center gap-5 md:flex-col xl:flex-row">
            <UserIcon size={50} />
            <div className="flex flex-col md:text-center xl:text-left">
              <span className="font-bold text-2xl">Total Users</span>
              <span className="text-xl font-medium">{allUsers?.data?.length}</span>
            </div>
          </div>
        </Card>
        <Card className="px-10">
          <div className="flex items-center gap-5 md:flex-col xl:flex-row">
            <UserIcon size={50} />
            <div className="flex flex-col md:text-center xl:text-left">
              <span className="font-bold text-2xl">Total Agents</span>
              <span className="text-xl font-medium">{allAgents?.data?.length}</span>
            </div>
          </div>
        </Card>
        <Card className="px-10">
          <div className="flex items-center gap-5 md:flex-col xl:flex-row">
            <WalletIcon size={50} />
            <div className="flex flex-col md:text-center xl:text-left">
              <span className="font-bold text-2xl">Transaction</span>
              <span className="text-xl font-medium">{Math.round(totalTransactionAmount)} Taka</span>
            </div>
          </div>
        </Card>
        <Card className="px-10">
          <div className="flex items-center gap-5 md:flex-col xl:flex-row">
            <Coins size={50} />
            <div className="flex flex-col md:text-center xl:text-left">
              <span className="font-bold text-2xl">Total Profit</span>
              <span className="text-xl font-medium">{Math.round(totalProfitAmount)} Taka</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-2">
        {/* <div>
          <ChartPieLabelList chartData = {tranAmountByTypeChartData}/>
        </div> */}
        <div>
          <ChartBarDefault xAxisDataKey='type' barDataKey='amount' chartData={tranAmountByTypeChartData} chartTitle='Transactions by Types' chartDescription="All the transaction type and their total amount transacted for each type." />
        </div>
        <div>
          <ChartBarDefault xAxisDataKey='date' barDataKey='count' chartData={usersByDateChartData} chartTitle='User Registration' chartDescription="Number of user registered per date." />
        </div>
      </div>
    </div>
  )
}

export default Analytics
