import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserDeleteConfimDialog from "./dialogs/UserDeleteConfimDialog"
import UserStatusUpdateDialog from "./dialogs/userStatusUpdateDialog"


export default function UserTableDataActions({ userId }: { userId: string }) {
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Actions
          <ChevronDownIcon
            className="-me-1 opacity-60"
            size={16}
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>View</span>
            <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>Edit</span>
            <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        {/* update user status  */}
        <DropdownMenuSeparator />
        <UserStatusUpdateDialog userId = {userId}>
          <DropdownMenuItem className="w-full" onSelect={(e) => e.preventDefault()} variant="destructive">
            <span>Update Status</span>
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </UserStatusUpdateDialog>
        <DropdownMenuSeparator />
        {/* delete user  */}
        <UserDeleteConfimDialog userId = {userId}>
          <DropdownMenuItem className="w-full" onSelect={(e) => e.preventDefault()} variant="destructive">
            <span>Delete</span>
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </UserDeleteConfimDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
