import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const TransactionTypeCard = ({ transactionType }: any) => {
    return (
        <Card className="add-money">
            <CardHeader>
                <img className="w-24 mx-auto" src={transactionType?.icon} alt="icon" />
            </CardHeader>
            <CardContent>
                <CardTitle className="text-center font-bold text-lg md:text-xl">{transactionType?.title}</CardTitle>
            </CardContent>
        </Card>
    )
}

export default TransactionTypeCard
