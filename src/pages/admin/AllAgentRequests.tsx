import DashboardLoader from "@/components/DashboardLoader"
import AgentRequestDataTable from "@/components/data-tables/AgentRequestDataTable"
import { useAllAgentRequestQuery } from "@/redux/features/agentRequest/agentRequest.api"

const AllAgentRequests = () => {

    const {data: agentRequests, isLoading} = useAllAgentRequestQuery(undefined)

    if(isLoading){
        return <DashboardLoader/>
    }

  return (
    <div>
        <AgentRequestDataTable agentRequests = {agentRequests.data}/>
    </div>
  )
}

export default AllAgentRequests
