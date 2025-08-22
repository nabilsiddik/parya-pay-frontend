import DashboardLoader from "@/components/DashboardLoader"
import TransactionDataTable from "@/components/data-tables/TransactionDataTable"
import { useGetAllTransactionsQuery } from "@/redux/features/transaction/transaction.api"

const AllTransactions = () => {

    const {data: transactions, isLoading} = useGetAllTransactionsQuery(undefined)

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
