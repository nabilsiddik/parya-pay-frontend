import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"

interface ITransactionTypeProps{
    id: number,
    title: string,
    link: string
}

const TransactionTypeCard = ({transactionType}: any) => {
    return (
        <Link to={transactionType?.link}>
            <Card>
                <CardHeader>
                    <img className="w-24 mx-auto" src={transactionType?.icon} alt="icon" />
                </CardHeader>
                <CardContent>
                    <CardTitle className="text-center font-bold text-lg md:text-xl">{transactionType?.title}</CardTitle>
                </CardContent>
            </Card>
        </Link>
    )
}

export default TransactionTypeCard
