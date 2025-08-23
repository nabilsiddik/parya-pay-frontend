import DashboardLoader from "@/components/DashboardLoader"
import TransactionDataTable from "@/components/data-tables/TransactionDataTable"
import { useGetUserTransactionHistoryQuery } from "@/redux/features/transaction/transaction.api"
import { useSearchParams } from "react-router-dom"

const MyTransactions = () => {
    const [searchParams] = useSearchParams()
    const selectedTransactionType = searchParams.get('type') || undefined
    const selectedLimit = searchParams.get('limit') || undefined
    const selectedStatus = searchParams.get('status') || undefined
    const searchTerm = searchParams.get('searchTerm') || undefined

    const {data: transactions, isLoading} = useGetUserTransactionHistoryQuery({type: selectedTransactionType, limit: selectedLimit, status: selectedStatus, searchTerm})

    if(isLoading){
        return <DashboardLoader/>
    }

    console.log('tran', transactions?.data?.transactions)

  return (
    <div>
        <TransactionDataTable transactions = {transactions?.data?.transactions}/>
    </div>
  )
}

export default MyTransactions
