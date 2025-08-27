import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useUpdateUserStatusMutation } from "@/redux/features/user/user.api"
import { toast } from "sonner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useGetCurrentUserQuery } from "@/redux/features/auth/auth.api"
import { useState } from "react"

const UserStatusUpdateDialog = ({ children, userId }: { children: React.ReactNode, userId: string }) => {
    const {data: user} = useGetCurrentUserQuery(undefined)
    const [currentStatus, setCurrentStatus] = useState<string>(user?.status || '')
    const [updateUserStatus] = useUpdateUserStatusMutation()

    // Handle delete user
    const handleUpdateUserStatus = async () => {
        const loadingId = toast.loading('Updating...')
        try {
            const res = await updateUserStatus({userId, status: currentStatus}).unwrap()

            console.log('response', res)

            if (res?.success) {
                toast.success('User Status Updated.', { id: loadingId })
            }

        } catch (error: any) {
            console.error(error)
            toast.error('Something went wrong.', { id: loadingId })
        }
    }

    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger>{children}</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Update User Status</AlertDialogTitle>
                        <AlertDialogTitle className="text-center mb-4">Update Agent Application</AlertDialogTitle>
                        <div>
                            <Select value={currentStatus || ''} onValueChange={(value) => setCurrentStatus(value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Actions" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ACTIVE">ACTIVE</SelectItem>
                                    <SelectItem value="INACTIVE">INACTIVE</SelectItem>
                                    <SelectItem value="BLOCKED">BLOCKED</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleUpdateUserStatus}>Update</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default UserStatusUpdateDialog
