import TransactionTypeCard from "@/components/TransactionTypeCard";
import { Card } from "@/components/ui/card"
import { useGetUserTransactionHistoryQuery } from "@/redux/features/transaction/transaction.api"
import { useGetSingleWalletQuery } from "@/redux/features/wallet/wallet.api";
import { TransactionTypes } from "@/types/transaction.types";
import { Coins, UserIcon, WalletIcon } from "lucide-react"
import { TbMoneybag } from "react-icons/tb";

import addMoney from '../../assets/images/add-money.png'
import sendMoney from '../../assets/images/send-money.png'
import cashIn from '../../assets/images/cash-in.png'
import withdrawMoney from '../../assets/images/atm.png'

import { driver } from 'driver.js'
import "driver.js/dist/driver.css";
import { useGetCurrentUserQuery } from "@/redux/features/auth/auth.api";
import { useEffect } from "react";

export const restartTour = () => {
    localStorage.removeItem('tourSeen')
    const driverObj = driver({
        showProgress: true,
        showButtons: ['next', 'previous', 'close'],
        animate: true,
        stagePadding: 10,
        steps: [
            {
                element: ".transaction-summery",
                popover: {
                    title: "Transaction summery section.",
                    description: `
                            This is the transaction summery section.
                        `,
                    side: "bottom",
                    align: "start",
                },
            },
            {
                element: ".transaction-type",
                popover: {
                    title: "Transaction Type section.",
                    description: `
                            This is the transaction type section.
                        `,
                    side: "bottom",
                    align: "start",
                },
            },
            {
                element: ".balance",
                popover: {
                    title: "Balance Available",
                    description: `
                            This is balance avaiable in your wallet.
                        `,
                    side: "bottom",
                    align: "start",
                },
            },
            {
                element: ".total-transactions",
                popover: {
                    title: "Total Transactions",
                    description: `
                            Total transaction count of your account.
                        `,
                    side: "right",
                },
            },
            {
                element: ".transacted-amount",
                popover: {
                    title: "Transacted Amount",
                    description: `
                            Total transacted amount of yours.
                        `,
                    side: "left",
                },
            },
            {
                element: ".total-withdraw",
                popover: {
                    title: "Total Withdraw",
                    description: `
                            Total withdraw amount of your account.
                        `,
                    side: "left",
                },
            },
            // {
            //     element: ".add-money",
            //     popover: {
            //         title: "Add Money",
            //         description: `
            //                 You can do add money to your wallet.
            //             `,
            //         side: "top",
            //     },
            // },
            // {
            //     element: ".withdraw-money",
            //     popover: {
            //         title: "Withdraw Money",
            //         description: `
            //                 You can do withdraw money from your wallet.
            //             `,
            //         side: "bottom",
            //     },
            // },
            // {
            //     element: ".cash-in",
            //     popover: {
            //         title: "Cash In",
            //         description: `
            //                 You can do add cash in to your wallet.
            //             `,
            //         side: "left",
            //     },
            // },
            // {
            //     element: ".cash-out",
            //     popover: {
            //         title: "Cash Out",
            //         description: `
            //                 You can do cash out from your wallet.
            //             `,
            //         side: "top",
            //     },
            // }
        ]
    });


    driverObj.drive();


};


const UserAnalytics = () => {

    const { data: userWallet } = useGetSingleWalletQuery(undefined)
    const { data: transactions } = useGetUserTransactionHistoryQuery(undefined)
    const { data } = useGetCurrentUserQuery(undefined)
    const user = data?.data

    console.log('my tra', transactions?.data.transactions)
    const totalTransactedAmount = transactions?.data.transactions.reduce((sum: number, acc: any) => sum + acc.amount, 0)

    const totalMoneyWithdraw = transactions?.data.transactions.reduce((sum: number, acc: any) => {
        if (acc.type === TransactionTypes.WITHDRAW_MONEY || acc.type === TransactionTypes.CASH_OUT) {
            return sum + acc.amount
        }
        return sum
    }, 0)

    const transactionTypes = [
        {
            id: 1,
            title: 'Add Money',
            link: '/user/add-money',
            icon: addMoney
        },
        {
            id: 2,
            title: 'Withdraw Money',
            link: '/user/withdraw-money',
            icon: withdrawMoney
        },
        {
            id: 3,
            title: 'Send Money',
            link: '/user/send-money',
            icon: sendMoney
        },
        {
            id: 4,
            title: 'Cash Out',
            link: '/user/cash-out',
            icon: cashIn
        }
    ]

    useEffect(() => {
        if (!localStorage.getItem('tourSeen')) {
            startTour()
            localStorage.setItem('tourSeen', "true")
        }
    }, [user])



    const startTour = () => {
        const driverObj = driver({
            showProgress: true,
            showButtons: ['next', 'previous', 'close'],
            animate: true,
            stagePadding: 10,
            steps: [
                {
                    element: ".transaction-summery",
                    popover: {
                        title: "Transaction summery section.",
                        description: `
                            This is the transaction summery section.
                        `,
                        side: "bottom",
                        align: "start",
                    },
                },
                {
                    element: ".transaction-type",
                    popover: {
                        title: "Transaction Type section.",
                        description: `
                            This is the transaction type section.
                        `,
                        side: "bottom",
                        align: "start",
                    },
                },
                {
                    element: ".balance",
                    popover: {
                        title: "Balance Available",
                        description: `
                            This is balance avaiable in your wallet.
                        `,
                        side: "bottom",
                        align: "start",
                    },
                },
                {
                    element: ".total-transactions",
                    popover: {
                        title: "Total Transactions",
                        description: `
                            Total transaction count of your account.
                        `,
                        side: "right",
                    },
                },
                {
                    element: ".transacted-amount",
                    popover: {
                        title: "Transacted Amount",
                        description: `
                            Total transacted amount of yours.
                        `,
                        side: "left",
                    },
                },
                {
                    element: ".total-withdraw",
                    popover: {
                        title: "Total Withdraw",
                        description: `
                            Total withdraw amount of your account.
                        `,
                        side: "left",
                    },
                },
                // {
                //     element: ".add-money",
                //     popover: {
                //         title: "Add Money",
                //         description: `
                //             You can do add money to your wallet.
                //         `,
                //         side: "top",
                //     },
                // },
                // {
                //     element: ".withdraw-money",
                //     popover: {
                //         title: "Withdraw Money",
                //         description: `
                //             You can do withdraw money from your wallet.
                //         `,
                //         side: "bottom",
                //     },
                // },
                // {
                //     element: ".cash-in",
                //     popover: {
                //         title: "Cash In",
                //         description: `
                //             You can do add cash in to your wallet.
                //         `,
                //         side: "left",
                //     },
                // },
                // {
                //     element: ".cash-out",
                //     popover: {
                //         title: "Cash Out",
                //         description: `
                //             You can do cash out from your wallet.
                //         `,
                //         side: "top",
                //     },
                // }
            ]
        });


        driverObj.drive();


    };

    return (
        <div>
            <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-4 transaction-summery">
                <Card className="px-10 balance">
                    <div className="flex items-center gap-5 md:flex-col xl:flex-row">
                        <TbMoneybag className="text-5xl" />
                        <div className="flex flex-col md:text-center xl:text-left">
                            <span className="font-bold text-2xl">Balance</span>
                            <span className="text-xl font-medium">{userWallet?.data?.balance} Taka</span>
                        </div>
                    </div>
                </Card>
                <Card className="px-10 total-transactions">
                    <div className="flex items-center gap-5 md:flex-col xl:flex-row">
                        <UserIcon size={50} />
                        <div className="flex flex-col md:text-center xl:text-left">
                            <span className="font-bold text-2xl">Total Transactions</span>
                            <span className="text-xl font-medium">{transactions?.data?.transactions?.length}</span>
                        </div>
                    </div>
                </Card>
                <Card className="px-10 transacted-amount">
                    <div className="flex items-center gap-5 md:flex-col xl:flex-row">
                        <WalletIcon size={50} />
                        <div className="flex flex-col md:text-center xl:text-left">
                            <span className="font-bold text-2xl">Transacted Amount</span>
                            <span className="text-xl font-medium">{totalTransactedAmount} Taka</span>
                        </div>
                    </div>
                </Card>
                <Card className="px-10 total-withdraw">
                    <div className="flex items-center gap-5 md:flex-col xl:flex-row">
                        <Coins size={50} />
                        <div className="flex flex-col md:text-center xl:text-left">
                            <span className="font-bold text-2xl">Total Withdraw</span>
                            <span className="text-xl font-medium">{totalMoneyWithdraw} Taka</span>
                        </div>
                    </div>
                </Card>
            </div>


            <div className="mt-20 transaction-type">
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
                    {transactionTypes.length > 0 && transactionTypes.map((type) => {
                        return <TransactionTypeCard key={type.id} transactionType={type} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default UserAnalytics
