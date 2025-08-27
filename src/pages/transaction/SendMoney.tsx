import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../components/ui/form';
import {  useSendMoneyMutation } from "@/redux/features/transaction/transaction.api"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Phone, Wallet } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import sendMoneyIcon from '../../assets/images/send-money.png'
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


// send money zod schema
export const sendMoneyZodSchema = z.object({
    numberTo: z.string('Number must be a string')
    .length(11)
    .regex(/^01[3-9]\d{8}$/),
    amount: z.number('Balance must be a positive number')
    .int('Amount should be integer number')
    .positive('Amount should be positive Number')
    .min(10, 'Minimum add balance amount is 10')
    .max(50000, 'Maximum add balance amount is 50,000 at a time')
})

const SendMoney = () => {
  const [sendMoney] = useSendMoneyMutation()

  // React hook form
  const form = useForm<z.infer<typeof sendMoneyZodSchema>>({
    resolver: zodResolver(sendMoneyZodSchema),
    defaultValues: {
      numberTo: '',
      amount: 100
    }
  })


  // Add money to own wallet
  const handleSendMoney = async (data: z.infer<typeof sendMoneyZodSchema>) => {

    const toastId = toast.loading('Sending...')
    const sendMoneyInfo = {
      numberTo: data.numberTo,
      amount: Number(data.amount)
    }

    // Create user in database
    try {
      const res = await sendMoney(sendMoneyInfo).unwrap()

      if (res?.success) {
        toast.success('Send Money Successful.', { id: toastId })
      }

    } catch (error: any) {
      toast.error(error?.data?.message, { id: toastId })
    }
  }



  return (
    <div className="container mx-auto px-5 py-10">
      <div className='flex items-center gap-3 justify-center mb-5'>
        <img className='w-20' src={sendMoneyIcon} alt="add money icon" />
        <h1 className='text-center font-bold text-2xl md:text-3xl'>Send Money</h1>
      </div>
      <div className='max-w-2xl mx-auto'>
        <Form {...form}>
          {/* Form */}
          <form onSubmit={form.handleSubmit(handleSendMoney)} className="space-y-6">

            {/* Number to send money */}
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="numberTo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-lg'>Number</FormLabel>
                    <FormControl>
                      <div className='relative'>
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                          <Phone />
                        </div>
                        <Input className='flex h-12 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-3 py-2 pl-12 text-md text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50' placeholder="Enter Number To" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* send money amount */}
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-lg'>Amount</FormLabel>
                    <FormControl>
                      <div className='relative'>
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                          <Wallet />
                        </div>
                        <Input className='flex h-12 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-3 py-2 pl-12 text-md text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50' placeholder="Enter Amount" {...field} type='number' onChange={(e) => field.onChange(e.target.valueAsNumber)} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Create Account Button */}
            <Button
              type="submit"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white dark:ring-offset-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary dark:bg-gray-50 text-gray-50 dark:text-gray-900 hover:bg-primary dark:hover:bg-gray-50/90 h-10 px-4 py-2 w-full cursor-pointer"
            >
              Send Money
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default SendMoney
