import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useDeleteUserMutation } from "@/redux/features/user/user.api"
import { useState } from "react"
import { toast } from "sonner"

const AgentRequestActionModal = ({ children, status, requestId }: { children: React.ReactNode, status: string, requestId: string }) => {
    const [currentStatus, setCurrentStatus] = useState<string>(status)
    const [handleAgentRequest] = useDeleteUserMutation()



    const handleActionChange = async (value: string) => {
        setCurrentStatus(value)
    }

    // Update status
    const handleUpdateStatus = async () => {
        console.log(currentStatus, requestId)
        
        try {
            const res = await handleAgentRequest({
                agentRequestId: requestId,
                bodyData: {
                    status: currentStatus
                }
            }).unwrap()

            if (res?.success) {
                toast.success('Status Updated.')
            }
        } catch (error: any) {
            toast.error(error?.data?.message)
        }
    }

    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger>{children}</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-center mb-4">Update Agent Application</AlertDialogTitle>
                        <div>
                            <Select value={currentStatus} onValueChange={(value) => handleActionChange(value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Actions" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="PENDING">PENDING</SelectItem>
                                    <SelectItem value="APPROVED">APPROVED</SelectItem>
                                    <SelectItem value="SUSPENDED">SUSPENDED</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleUpdateStatus}>Update</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default AgentRequestActionModal

