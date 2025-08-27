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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useHandleAgentRequestMutation } from "@/redux/features/agentRequest/agentRequest.api"
import { useState } from "react"
import { toast } from "sonner"

const AgentRequestActionModal = ({ children, status, requestId }: { children: React.ReactNode, status: any, requestId: string }) => {
    const [currentStatus, setCurrentStatus] = useState<any>(status)
    const [handleAgentRequest] = useHandleAgentRequestMutation()

    const handleActionChange = async (value: string) => {
        setCurrentStatus(value)
    }

    // Update status
    const handleUpdateStatus = async () => {
        
        try {
            const res = await handleAgentRequest({requestId, status: currentStatus}).unwrap()

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

