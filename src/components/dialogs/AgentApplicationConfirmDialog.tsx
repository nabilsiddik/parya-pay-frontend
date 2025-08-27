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
import { useBecomeAgentMutation } from "@/redux/features/user/user.api"
import { toast } from "sonner"

export function AgentApplicationConfirmDialog({children}: {children: React.ReactNode}) {
  const [becomeAgent] = useBecomeAgentMutation()

  // Agent application
  const handleAgentApplication = async() => {
    try{
        const res = await becomeAgent(undefined).unwrap()
        if(res?.success){
            toast.success('Application submitted.')
        }
        console.log(res)
    }catch(error: any){
        toast.error('Something went wrong.')
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Please Confirm Application</AlertDialogTitle>
          <AlertDialogDescription>
            Please confirm that you want to apply to become an agent. The application status will be pending initially. After admin approval you will become an agent.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleAgentApplication}>Apply</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
