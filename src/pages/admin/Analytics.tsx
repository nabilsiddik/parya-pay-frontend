import { Card } from "@/components/ui/card"
import { useGetAllTransactionsQuery } from "@/redux/features/transaction/transaction.api"
import { useGetAllAgentsQuery, useGetAllUsersQuery } from "@/redux/features/user/user.api"
import { Coins, UserIcon, WalletIcon } from "lucide-react"

const Analytics = () => {

  const {data: allUsers} = useGetAllUsersQuery(undefined)
  const {data: allAgents} = useGetAllAgentsQuery(undefined)
  const {data: allTransactions} = useGetAllTransactionsQuery(undefined)

  // Total transaction amount
  const totalTransactionAmount = allTransactions?.data.reduce((sum: number, transaction: any) => sum + Number(transaction?.totalAmountWithCharge || 0), 0)

  // Total Profit amount for payra pay
  const totalProfitAmount = allTransactions?.data.reduce((sum: number, transaction: any) => sum + Number(transaction?.payraPayGot || 0), 0)


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
    </div>
  )
}

export default Analytics
