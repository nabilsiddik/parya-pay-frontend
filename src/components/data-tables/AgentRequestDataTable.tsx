import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "../ui/badge"
import UserTableDataActions from "../UserTableDataActions"
import formatDate from "@/utils/formatDate"
import { Button } from "../ui/button"
import AgentRequestActionModal from "./AgentRequestActionModal"

export default function AgentRequestDataTable({ agentRequests }: any) {

    console.log('sdfsdf', agentRequests)

    return (
        <div className="w-full">
            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Application Date</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {agentRequests.length > 0 && agentRequests.map((request: any) => {
                            return <TableRow>
                                <TableCell>
                                    {request?.user}
                                </TableCell>
                                <TableCell>
                                    <Badge>
                                        {request?.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    {formatDate(request?.createdAt)}
                                </TableCell>
                                <TableCell>
                                    {/* <UserTableDataActions userId = {user?._id} /> */}
                                    <AgentRequestActionModal status = {request?.status} requestId = {request?._id}>
                                        <Button className="cursor-pointer">Take Action</Button>
                                    </AgentRequestActionModal>
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
