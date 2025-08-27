import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"


const TransactionTypeCard = ({ transactionType }: any) => {
    return (
        <Link to={transactionType?.link}>
            <Card className="add-money">
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
