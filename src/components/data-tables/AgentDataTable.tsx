import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "../ui/badge"
import formatDate from "@/utils/formatDate";


export default function AgentDataTable({ agents }: any) {

  return (
    <div className="w-full">
      <h1 className="mb-5 font-bold text-left text-xl">All Agents</h1>

      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Verification Status</TableHead>
              <TableHead>Active Status</TableHead>
              <TableHead>Registered Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {agents.length > 0 && agents.map((agent: any) => {
              return <TableRow>
                <TableCell>
                  {agent?.name}
                </TableCell>
                <TableCell>
                  {agent?.email}
                </TableCell>
                <TableCell>
                  {agent?.phone}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="gap-1 px-2 py-1">
                    {agent?.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="gap-1 px-2 py-1">
                    {agent?.isVerified ? 'Verified' : 'Unverified'}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="gap-1 px-2 py-1">
                    {agent?.isActive ? 'Active' : 'Inactive'}
                  </Badge>
                </TableCell>
                <TableCell>
                  {formatDate(agent?.createdAt)}
                </TableCell>
                <TableCell>
                  {/* <TableDataAction /> */}
                  action
                </TableCell>
              </TableRow>
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
