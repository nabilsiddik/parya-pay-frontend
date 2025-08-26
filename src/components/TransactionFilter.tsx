import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useSearchParams } from "react-router-dom"
import { Input } from "./ui/input"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"

const TransactionFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchTerm, setSearchTerm] = useState<string>('')
    const selectedTransactionType = searchParams.get('type') || undefined
    const selectedLimit = searchParams.get('limit') || undefined
    const selectedStatus = searchParams.get('status') || undefined


    // On transaction type change
    const handleTransactionTypeChange = (value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('type', value)
        setSearchParams(params)
    }

    // On limit change
    const handleLimitChange = (value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('limit', value)
        setSearchParams(params)
    }

    // On status change
    const handleStatusChange = (value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('status', value)
        setSearchParams(params)
    }

    useEffect(() => {
        if (searchTerm) {
            const params = new URLSearchParams(searchParams)
            params.set('searchTerm', searchTerm)
            setSearchParams(params)
        } else {
            const params = new URLSearchParams(searchParams);
            params.delete('searchTerm')
            setSearchParams(params)
        }
    }, [searchTerm])


    // clear filter
    const handleClearFilter = async() => {
        setSearchParams(undefined)
    }

    return (
        <div className="flex items-center justify-between gap-3 flex-col md:flex-row p-3 md:p-0">
            <div className="flex items-center gap-3 flex-col md:flex-row">
                <Select value={selectedTransactionType ? selectedTransactionType : ''} onValueChange={(value) => handleTransactionTypeChange(value)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="ADD_MONEY">ADD_MONEY</SelectItem>
                        <SelectItem value="WITHDRAW_MONEY">WITHDRAW_MONEY</SelectItem>
                        <SelectItem value="SEND_MONEY">SEND_MONEY</SelectItem>
                        <SelectItem value="CASH_IN">CASH_IN</SelectItem>
                        <SelectItem value="CASH_OUT">CASH_OUT</SelectItem>
                    </SelectContent>
                </Select>

                <Input value={selectedLimit ? selectedLimit : ''} type='number' onChange={(e) => handleLimitChange(e.target.value)} placeholder="Row Limit" />

                <Select value={selectedStatus ? selectedStatus : ''} onValueChange={(value) => handleStatusChange(value)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="PENDING">PENDING</SelectItem>
                        <SelectItem value="COMPLETED">COMPLETED</SelectItem>
                        <SelectItem value="CANCLED">CANCLED</SelectItem>
                        <SelectItem value="REVERSED">REVERSED</SelectItem>
                    </SelectContent>
                </Select>

                <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search" />
            </div>
            <div className="w-full md:w-auto">
                <Button className="w-full" onClick={handleClearFilter}>Clear Filter</Button>
            </div>
        </div>
    )
}

export default TransactionFilter
