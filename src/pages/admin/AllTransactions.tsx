import DashboardLoader from "@/components/DashboardLoader"
import TransactionDataTable from "@/components/data-tables/TransactionDataTable"
import { useGetAllTransactionsQuery } from "@/redux/features/transaction/transaction.api"
import { useSearchParams } from "react-router-dom"

const AllTransactions = () => {
    const [searchParams] = useSearchParams()
    const selectedTransactionType = searchParams.get('type') || undefined
    const {data: transactions, isLoading} = useGetAllTransactionsQuery({type: selectedTransactionType})
    
    if(isLoading){
        return <DashboardLoader/>
    }

  return (
    <div>
        <TransactionDataTable transactions = {transactions.data}/>
    </div>
  )
}

export default AllTransactions
