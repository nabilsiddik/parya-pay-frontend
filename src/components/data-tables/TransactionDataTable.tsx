import { IoCloseSharp } from "react-icons/io5";
import { PiArrowBendDoubleUpRightBold } from "react-icons/pi";
import { AiOutlineReload } from "react-icons/ai";
import { CheckIcon } from "lucide-react"

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
import TransactionFilter from "../TransactionFilter";
import { useGetCurrentUserQuery } from "@/redux/features/auth/auth.api";
import { Role } from "@/constants/role";



export default function TransactionDataTable({ transactions }: any) {

  const { data: logedInUser } = useGetCurrentUserQuery(undefined)

  return (
    <div className="w-full">
      <div className="mb-5">
        <TransactionFilter />
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Username</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Charge</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Number From</TableHead>
              <TableHead>Number To</TableHead>
              {logedInUser?.data?.role !== Role.USER && logedInUser?.data?.role !== Role.AGENT &&
                <TableHead>Action</TableHead>
              }
            </TableRow>
          </TableHeader>

          <TableBody>
            {transactions.length > 0 && transactions.map((transaction: any) => {
              return <TableRow key={transaction?._id}>
                <TableCell>
                  {transaction?.user?.name}
                </TableCell>
                <TableCell>
                  {transaction.amount} Taka
                </TableCell>
                <TableCell>
                  {transaction.charge} Taka
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="gap-1 px-2 py-1">
                    {transaction.type}
                  </Badge>
                </TableCell>
                <TableCell>
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
                </TableCell>
                <TableCell>
                  {formatDate(transaction?.createdAt)}
                </TableCell>
                <TableCell>
                  {transaction?.numberFrom ? transaction?.numberFrom : 'Unavailable'}
                </TableCell>
                <TableCell>
                  {transaction?.numberTo ? transaction?.numberTo : 'Unavailable'}
                </TableCell>
                {logedInUser?.data?.role !== Role.USER && logedInUser?.data?.role !== Role.AGENT &&
                  <TableCell>
                    {/* <TableDataAction /> */}
                    action
                  </TableCell>
                }
              </TableRow>
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
