import { IoCloseSharp } from "react-icons/io5";
import { PiArrowBendDoubleUpRightBold } from "react-icons/pi";
import { AiOutlineReload } from "react-icons/ai";


import * as React from "react"
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDown, CheckIcon, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
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
