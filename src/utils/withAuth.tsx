import { useGetCurrentUserQuery } from "@/redux/features/auth/auth.api"
import type { TRole } from "@/types"
import type { ComponentType } from "react"
import { Navigate } from "react-router-dom"

const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
    return function authWrapper() {
        const { data, isLoading } = useGetCurrentUserQuery(undefined)

        if (!isLoading && !data?.data?.email) {
            return <Navigate to='/login' />
        }

        if(requiredRole && !isLoading && requiredRole !== data?.data?.role){
            return <Navigate to='/unauthorize'/>
        }

        return <Component/>
    }
}

export default withAuth