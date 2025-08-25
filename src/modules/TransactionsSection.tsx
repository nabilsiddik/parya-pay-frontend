import TransactionTypeCard from "@/components/TransactionTypeCard"
import { transactionTypes } from "@/data/transactionTypes"

const TransactionsSection = () => {
  return (
    <section className="my-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {transactionTypes.length > 0 && transactionTypes.map((type) => {
            return <TransactionTypeCard key={type.id} transactionType={type}/>
        })}
      </div>
    </section>
  )
}

export default TransactionsSection
