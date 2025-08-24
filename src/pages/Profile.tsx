import { Badge } from '@/components/ui/badge'
import profile from '../assets/images/profile/nabil-siddik-web-developer.png'
import { useGetCurrentUserQuery } from '@/redux/features/auth/auth.api'
import { Edit, EyeIcon, EyeOffIcon, LockIcon, MailIcon, Phone, UserIcon } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import ProfileUploader from '@/components/ProfileUploader'

// Update user zod schema
export const updateUserZodSchema = z.object({
  name: z.string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .max(50, { message: 'Name can not be more that 50 characters.' })
    .optional(),

  password: z.string().
    min(8, { message: 'Password minimum length is 8.' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, { message: 'Password must contain at least 1 uppercase letter, 1 lowercase letter, one special character and one number.' })
    .optional(),

  confirmPassword: z.string().
    min(8, { message: 'Password minimum length is 8.' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, { message: 'Password must contain at least 1 uppercase letter, 1 lowercase letter, one special character and one number.' }),

  address: z.string()
    .max(200, { message: 'Address can not exced 200 characters.' })
    .optional()
})

const Profile = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const [edit, setEdit] = useState<boolean>(true)
  const { data: logedInUser } = useGetCurrentUserQuery(undefined)
  console.log(logedInUser?.data)

  const form = useForm<z.infer<typeof updateUserZodSchema>>({
    resolver: zodResolver(updateUserZodSchema),
    defaultValues: {
      name: "",
      password: "",
      confirmPassword: "",
      address: ""
    },
  })

  // Toogle password and confirm password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Update user
  const handleUpdateUser = (data: z.infer<typeof updateUserZodSchema>) => {
    console.log(data)
  }

  return (
    <div className='flex gap-5 flex-col lg:flex-row'>
      <div className='flex-2 bg-card text-card-foreground p-5 rounded-lg'>
        <div className='flex justify-center flex-col gap-3'>
          <img className='w-56 mx-auto' src={profile} alt="profile" />
          <div className='flex items-center flex-col gap-1'>
            <h3 className=' text-2xl font-bold'>{logedInUser?.data?.name}</h3>
            <div className='mb-2'>
              <Badge className='px-8 py-1 font-bold'>{logedInUser?.data?.role}</Badge>
            </div>
            <p>{logedInUser?.data?.email}</p>
            <p>{logedInUser?.data?.phone}</p>
          </div>
        </div>
      </div>
      <div className='flex-5 rounded-lg bg-card text-card-foreground p-5'>
        <div className='flex items-center justify-between'>
          <h3 className=' text-2xl font-bold'>My Profile</h3>
          <Edit onClick={() => setEdit(!edit)} className='cursor-pointer' />
        </div>
        <hr className='my-5' />


        {edit ?

          <div>
            <Form {...form}>
              <form className='flex items-center gap-8 flex-col xl:flex-row items-stretch' onSubmit={form.handleSubmit(handleUpdateUser)}>
                <div className='xl:flex-2 flex flex-col gap-5'>
                  {/* Full Name Input */}
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <div className='relative'>
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                                <UserIcon />
                              </div>
                              <Input className='flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white  px-3 py-2 pl-10 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50' placeholder="Full Name" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <FormField
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <div className='relative'>
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                                <MailIcon />
                              </div>
                              <Input disabled defaultValue={logedInUser?.data?.email} className='flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white  px-3 py-2 pl-10 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50' placeholder="Valid Email" type='email' {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <FormField
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <div className='relative'>
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                                <Phone />
                              </div>
                              <Input disabled defaultValue={logedInUser?.data?.phone} className='flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white px-3 py-2 pl-10 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50' placeholder="Valid Phone Number" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className='xl:flex-1 w-full mt-5 xl:mt-0 rounded-lg border border-foregroundi flex items-center justify-center py-10'>
                  <ProfileUploader />
                </div>
              </form>

              <Button className='mt-5 w-full lg:w-auto'>Update Profile</Button>
            </Form>
          </div>

          :

          <div>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <Label className='text-lg text-gray-300 mb-2'>Full Name</Label>
                <p className='text-lg font-bold'>{logedInUser?.data?.name}</p>
              </div>
              <div>
                <Label className='text-lg text-gray-300 mb-2'>Email</Label>
                <p className='text-lg font-bold'>{logedInUser?.data?.email}</p>
              </div>
              <div>
                <Label className='text-lg text-gray-300 mb-2'>Number</Label>
                <p className='text-lg font-bold'>{logedInUser?.data?.phone}</p>
              </div>
            </div>
          </div>

        }


      </div>
    </div>
  )
}

export default Profile
