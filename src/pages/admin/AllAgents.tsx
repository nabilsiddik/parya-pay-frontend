import DashboardLoader from "@/components/DashboardLoader"
import AgentDataTable from "@/components/data-tables/AgentDataTable"
import { useGetAllAgentsQuery } from "@/redux/features/user/user.api"

const AllAgents = () => {

    const {data: agents, isLoading} = useGetAllAgentsQuery(undefined)

    if(isLoading){
        return <DashboardLoader/>
    }

  return (
    <div>
        <AgentDataTable agents = {agents.data}/>
    </div>
  )
}

export default AllAgents
