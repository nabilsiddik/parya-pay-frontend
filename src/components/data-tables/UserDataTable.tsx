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


export default function UserDataTable({ users }: any) {

  return (
    <div className="w-full">
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
            {users.length > 0 && users.map((user: any) => {
              return <TableRow>
                <TableCell>
                  {user?.name}
                </TableCell>
                <TableCell>
                  {user?.email}
                </TableCell>
                <TableCell>
                  {user?.phone}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="gap-1 px-2 py-1">
                    {user?.role}
                  </Badge>
                </TableCell>
                {/* <TableCell>
                  <Badge variant="outline" className="gap-1 px-2 py-1">
                    {transaction.status === 'COMPLETED' ?
                      <CheckIcon className="text-emerald-500" size={12} aria-hidden="true" />
                      :

                      transaction.status === 'PENDING'
                        ?
                        <AiOutlineReload className="text-blue-500" />
                        :

                        transaction.status === 'CANCLED'
                          ?
                          <IoCloseSharp className="text-red-500" />
                          :
                          <PiArrowBendDoubleUpRightBold className="text-yellow-500" />

                    }
                    {transaction.status}
                  </Badge>
                </TableCell> */}
                <TableCell>
                  <Badge variant="outline" className="gap-1 px-2 py-1">
                    {user?.isVerified ? 'Verified' : 'Unverified'}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="gap-1 px-2 py-1">
                    {user?.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {formatDate(user?.createdAt)}
                </TableCell>
                <TableCell>
                  <UserTableDataActions userId={user?._id} />
                </TableCell>
              </TableRow>
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
