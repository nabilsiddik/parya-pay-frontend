import { Card } from "@/components/ui/card"
import { useGetCurrentUserQuery } from "@/redux/features/auth/auth.api";
import { useGetUserTransactionHistoryQuery } from "@/redux/features/transaction/transaction.api"
import { useGetSingleWalletQuery } from "@/redux/features/wallet/wallet.api";
import { Coins, UserIcon, WalletIcon } from "lucide-react"
import { TbMoneybag } from "react-icons/tb";

const AgentAnalytics = () => {

    const { data: userWallet } = useGetSingleWalletQuery(undefined)
    const { data: transactions } = useGetUserTransactionHistoryQuery(undefined)
    const { data: logedInUser } = useGetCurrentUserQuery(undefined)


    const totalCashIn = transactions?.data?.transactions
        ?.filter((tran: any) => tran.user._id === logedInUser?.data._id && tran.type === "CASH_IN")
        ?.reduce((sum: number, cashInItem: any) => sum + cashInItem.amount, 0);


    const totalCashOut = transactions?.data?.transactions
        ?.filter((tran: any) => {
            return tran?.agent &&
           tran.type === "CASH_OUT" &&
           tran.agent.toString() === logedInUser?.data._id.toString();
        })
        ?.reduce((sum: number, cashOutItem: any) => sum + cashOutItem.amount, 0);
        

        console.log(totalCashOut)





    return (
        <div>
            <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-4">
                <Card className="px-10">
                    <div className="flex items-center gap-5 md:flex-col xl:flex-row">
                        <TbMoneybag className="text-5xl" />
                        <div className="flex flex-col md:text-center xl:text-left">
                            <span className="font-bold text-2xl">Balance</span>
                            <span className="text-xl font-medium">{userWallet?.data?.balance} Taka</span>
                        </div>
                    </div>
                </Card>
                <Card className="px-10">
                    <div className="flex items-center gap-5 md:flex-col xl:flex-row">
                        <UserIcon size={50} />
                        <div className="flex flex-col md:text-center xl:text-left">
                            <span className="font-bold text-2xl">Total Transactions</span>
                            <span className="text-xl font-medium">{transactions?.data?.transactions?.length}</span>
                        </div>
                    </div>
                </Card>
                <Card className="px-10">
                    <div className="flex items-center gap-5 md:flex-col xl:flex-row">
                        <WalletIcon size={50} />
                        <div className="flex flex-col md:text-center xl:text-left">
                            <span className="font-bold text-2xl">Total Cash In</span>
                            <span className="text-xl font-medium">{totalCashIn} Taka</span>
                        </div>
                    </div>
                </Card>
                <Card className="px-10">
                    <div className="flex items-center gap-5 md:flex-col xl:flex-row">
                        <Coins size={50} />
                        <div className="flex flex-col md:text-center xl:text-left">
                            <span className="font-bold text-2xl">Total Cashout</span>
                            <span className="text-xl font-medium">{totalCashOut} Taka</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default AgentAnalytics
