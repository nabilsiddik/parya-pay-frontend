import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useSearchParams } from "react-router-dom"

const TransactionFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const selectedTransactionType = searchParams.get('type') || undefined

    // On transaction type change
    const handleTransactionTypeChange = (value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('type', value)
        setSearchParams(params)
    }

    return (
        <div className="flex items-center justify-between gap-3">
            <div>
                <Select value={selectedTransactionType ? selectedTransactionType : ''} onValueChange={(value) => handleTransactionTypeChange(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Transaction Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="ADD_MONEY">ADD_MONEY</SelectItem>
                        <SelectItem value="WITHDRAW_MONEY">WITHDRAW_MONEY</SelectItem>
                        <SelectItem value="SEND_MONEY">SEND_MONEY</SelectItem>
                        <SelectItem value="CASH_IN">CASH_IN</SelectItem>
                        <SelectItem value="CASH_OUT">CASH_OUT</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div></div>
        </div>
    )
}

export default TransactionFilter
