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

const UserFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchTerm, setSearchTerm] = useState<string>('')
    const selectedUserRole = searchParams.get('role') || undefined
    const selectedLimit = searchParams.get('limit') || undefined
    const selectedStatus = searchParams.get('status') || undefined


    // On transaction type change
    const handleRoleChange = (value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('role', value)
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
                <Select value={selectedUserRole ? selectedUserRole : ''} onValueChange={(value) => handleRoleChange(value)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="ADMIN">ADMIN</SelectItem>
                        <SelectItem value="USER">USER</SelectItem>
                        <SelectItem value="AGENT">AGENT</SelectItem>
                    </SelectContent>
                </Select>

                <Input value={selectedLimit ? selectedLimit : ''} type='number' onChange={(e) => handleLimitChange(e.target.value)} placeholder="Row Limit" />

                <Select value={selectedStatus ? selectedStatus : ''} onValueChange={(value) => handleStatusChange(value)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="ACTIVE">ACTIVE</SelectItem>
                        <SelectItem value="INACTIVE">INACTIVE</SelectItem>
                        <SelectItem value="BLOCKED">BLOCKED</SelectItem>
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

export default UserFilter
