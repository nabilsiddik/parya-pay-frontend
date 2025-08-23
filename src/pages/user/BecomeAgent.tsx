import DashboardLoader from "@/components/DashboardLoader"
import { AgentApplicationConfirmDialog } from "@/components/dialogs/AgentApplicationConfirmDialog"
import { Button } from "@/components/ui/button"
import { useAllAgentRequestQuery } from "@/redux/features/agentRequest/agentRequest.api"
import { useGetCurrentUserQuery } from "@/redux/features/auth/auth.api"
import { CheckIcon, LoaderIcon } from "lucide-react"

const BecomeAgent = () => {

    const { data: agentRequests, isLoading: agentReqLoading } = useAllAgentRequestQuery(undefined)
    const { data: user, isLoading: userLoading } = useGetCurrentUserQuery(undefined)

    if (userLoading || agentReqLoading) {
        return <DashboardLoader />
    }

    const isAlreadyRequested = agentRequests?.data.find((request: any) => request.user === user?.data?._id)
    console.log('ddf', isAlreadyRequested)

    return (
        <div>
            {!isAlreadyRequested ?
                <div className="mt-10">
                    <h1 className="font-bold text-2xl text-center">Become An Agent</h1>
                    <AgentApplicationConfirmDialog>
                        <Button className="mx-auto block mt-3">Apply Now</Button>
                    </AgentApplicationConfirmDialog>
                </div>
                :
                <div>
                    {isAlreadyRequested.status === 'PENDING' ?
                        <div className="mt-10">
                            <div className="flex items-center justify-center gap-3 mb-3">
                                <span><LoaderIcon /></span>
                                <span className="text-3xl font-bold text-blue-600">Pending</span>
                            </div>
                            <h1 className="text-center font-medium text-xl">Your Request is now pending and waiting for Admin Approval</h1>
                        </div>
                        :
                        isAlreadyRequested.status === 'APPROVED' ?
                            <div className="mt-10">
                                <div className="flex items-center justify-center gap-3 mb-3">
                                    <span><CheckIcon /></span>
                                    <span className="text-3xl font-bold text-green-600">Approved</span>
                                </div>
                                <h1 className="text-center font-medium text-xl">Your Request is approved. You are now an agent.</h1>
                            </div>
                            :
                            isAlreadyRequested.status === 'SUSPENDED' ?
                                <div className="mt-10">
                                    <div className="flex items-center justify-center gap-3 mb-3">
                                        <span><CheckIcon /></span>
                                        <span className="text-3xl font-bold text-red-600">Suspended</span>
                                    </div>
                                    <h1 className="text-center font-medium text-xl">Sorry, you request is suspended.</h1>
                                </div>
                                :
                                <></>
                    }
                </div>
            }
        </div>
    )
}

export default BecomeAgent
