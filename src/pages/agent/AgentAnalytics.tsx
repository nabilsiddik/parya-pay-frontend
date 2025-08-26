import dayjs from "dayjs"
import { AgentCashInAreaChart } from "@/components/charts/AgentCashInAreaChart";
import { Card } from "@/components/ui/card"
import { useGetCurrentUserQuery } from "@/redux/features/auth/auth.api";
import { useGetUserTransactionHistoryQuery } from "@/redux/features/transaction/transaction.api"
import { useGetSingleWalletQuery } from "@/redux/features/wallet/wallet.api";
import { Coins, UserIcon, WalletIcon } from "lucide-react"
import { TbMoneybag } from "react-icons/tb";

const AgentAnalytics = () => {
    // const { data: allUsers } = useGetAllUsersQuery(undefined)
    // const { data: allTransactions } = useGetAllTransactionsQuery(undefined)


    const { data: userWallet } = useGetSingleWalletQuery(undefined)
    const { data: transactions } = useGetUserTransactionHistoryQuery(undefined)
    const { data: logedInUser } = useGetCurrentUserQuery(undefined)


    const totalCashIn = transactions?.data?.transactions
        ?.filter((tran: any) => tran.user._id === logedInUser?.data._id && tran.type === "CASH_IN")
        ?.reduce((sum: number, cashInItem: any) => sum + cashInItem.amount, 0)


    const totalCashOut = transactions?.data?.transactions
        ?.filter((tran: any) => {
            return tran?.agent &&
                tran.type === "CASH_OUT" &&
                tran.agent.toString() === logedInUser?.data._id.toString();
        })
        ?.reduce((sum: number, cashOutItem: any) => sum + cashOutItem.amount, 0)





    // All cash in array
    const allCashIn = transactions?.data?.transactions
        ?.filter((tran: any) => tran.type === "CASH_IN")

    // All cash out array
    const allCashOut = transactions?.data?.transactions
        ?.filter((tran: any) => tran.type === "CASH_OUT")


    console.log('all cash in', allCashIn)
    console.log('all cash out', allCashOut)



    const groupByDate = (arr: any[], type: "cashIn" | "cashOut") => {
        return arr.reduce((acc: any, curr: any) => {
            const date = dayjs(curr.createdAt).format("YYYY-MM-DD"); // normalize date
            if (!acc[date]) acc[date] = { date, cashIn: 0, cashOut: 0 };
            acc[date][type] += curr.amount;
            return acc;
        }, {} as Record<string, { date: string; cashIn: number; cashOut: number }>);
    };

    // Step 2: Group separately
    const cashInGrouped = groupByDate(allCashIn || [], "cashIn");
    const cashOutGrouped = groupByDate(allCashOut || [], "cashOut");

    // Step 3: Merge both results
    const merged: Record<string, { date: string; cashIn: number; cashOut: number }> = {
        ...cashInGrouped,
    };

    Object.keys(cashOutGrouped).forEach(date => {
        if (merged[date]) {
            merged[date].cashOut += cashOutGrouped[date].cashOut;
        } else {
            merged[date] = cashOutGrouped[date];
        }
    });

    // Step 4: Convert to array & sort
    const agentCashInOutChartData = Object.values(merged).sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );



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

            <div className="mt-20">
                <AgentCashInAreaChart chartData = {agentCashInOutChartData} />
            </div>
        </div>
    )
}

export default AgentAnalytics
