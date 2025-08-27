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
import { useDeleteUserMutation } from "@/redux/features/user/user.api"
import { toast } from "sonner"

const UserDeleteConfimDialog = ({children, userId}: {children: React.ReactNode, userId: string}) => {

    const [deleteUser] = useDeleteUserMutation()

    // Handle delete user
    const handleDeleteUser = async() => {
        const loadingId = toast.loading('Deleting...')
        try{
            const res = await deleteUser(userId).unwrap()

            console.log('response', res)

            if(res?.success){
                toast.success('User Deleted.', {id: loadingId})
            }

        }catch(error: any){
            console.error('my error', error)
            toast.error('Something went wrong.', {id: loadingId})
        }
    }

    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger>{children}</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the user.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDeleteUser}>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default UserDeleteConfimDialog
