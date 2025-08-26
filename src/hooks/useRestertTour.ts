import { useNavigate } from "react-router-dom"
import { driver } from "driver.js"

export const useRestartTour = () => {
  const navigate = useNavigate()

  return () => {
    navigate("/user/analytics")
    localStorage.removeItem("tourSeen")

    const driverObj = driver({
      showProgress: true,
      showButtons: ["next", "previous", "close"],
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
            }
        ]
    })

    driverObj.drive()
  }
}
