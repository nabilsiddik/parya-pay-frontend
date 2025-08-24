import DashboardLoader from "@/components/DashboardLoader"
import TransactionDataTable from "@/components/data-tables/TransactionDataTable"
import Paginate from "@/components/Paginate"
import { useGetAllTransactionsQuery } from "@/redux/features/transaction/transaction.api"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const AllTransactions = () => {
    const [searchParams] = useSearchParams()
    const selectedTransactionType = searchParams.get('type') || undefined
    const selectedLimit = searchParams.get('limit') || undefined
    const selectedStatus = searchParams.get('status') || undefined
    const searchTerm = searchParams.get('searchTerm') || undefined

    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(10)

    const {data: transactions, isLoading} = useGetAllTransactionsQuery({type: selectedTransactionType, limit: selectedLimit || limit, status: selectedStatus, searchTerm, page})

    const totalPage = transactions?.meta?.totalPage

    if(isLoading){
        return <DashboardLoader/>
    }

  return (
    <div>
        <TransactionDataTable transactions = {transactions.data}/>
        <div className="mt-3 flex justify-end">
          <Paginate page={page} setPage={setPage} totalPage = {totalPage}/>
        </div>
    </div>
  )
}

export default AllTransactions
