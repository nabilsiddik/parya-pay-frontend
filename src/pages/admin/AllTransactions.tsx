import DashboardLoader from "@/components/DashboardLoader"
import TransactionDataTable from "@/components/data-tables/TransactionDataTable"
import { useGetAllTransactionsQuery } from "@/redux/features/transaction/transaction.api"

const AllTransactions = () => {

    const {data: transactions, isLoading} = useGetAllTransactionsQuery(undefined)

    if(isLoading){
        return <DashboardLoader/>
    }

    const tranObj = transactions.data[0]
    const excluded = ['_id']
    const tranDataHeadings = Object.keys(tranObj).filter(obj => !excluded.includes(obj))


  return (
    <div>
        <TransactionDataTable transactionHeadings = {tranDataHeadings || []} transactions = {transactions.data}/>
    </div>
  )
}

export default AllTransactions
