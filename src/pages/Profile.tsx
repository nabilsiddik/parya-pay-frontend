import { Badge } from '@/components/ui/badge'
import profile from '../assets/images/profile/nabil-siddik-web-developer.png'
import { useGetCurrentUserQuery } from '@/redux/features/auth/auth.api'
import { Edit, EyeIcon, EyeOffIcon, LocationEditIcon, LockIcon, MailIcon, Phone, PhoneCall, User, UserIcon } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { useEffect, useState } from 'react'
import {
  Form,
  FormControl,
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
import { toast } from 'sonner'
import { useChangePasswordMutation, useUpdateUserMutation } from '@/redux/features/user/user.api'

// Update user zod schema
export const updateUserZodSchema = z.object({
  name: z.string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .max(50, { message: 'Name can not be more that 50 characters.' })
    .optional(),
  phone: z.string()
    .regex(/^(?:\+88|88)?01[3-9]\d{8}$/, { message: 'Invalid Phone Number.' }).optional(),
  address: z.string()
    .max(200, { message: 'Address can not exced 200 characters.' })
    .optional()
})

// Update user zod schema
export const updatePasswordZodSchema = z.object({
  currentPassword: z.string().optional(),
  newPassword: z.string().
    min(8, { message: 'Password minimum length is 8.' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, { message: 'Password must contain at least 1 uppercase letter, 1 lowercase letter, one special character and one number.' })
    .optional(),
  confirmPassword: z.string().
    min(8, { message: 'Password minimum length is 8.' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, { message: 'Password must contain at least 1 uppercase letter, 1 lowercase letter, one special character and one number.' })
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});

const Profile = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);

  const [edit, setEdit] = useState<boolean>(false)
  const { data: logedInUser } = useGetCurrentUserQuery(undefined)
  const [updateUser] = useUpdateUserMutation()
  const [changePassword] = useChangePasswordMutation()

  // update user form
  const updateUserForm = useForm<z.infer<typeof updateUserZodSchema>>({
    resolver: zodResolver(updateUserZodSchema),
    defaultValues: {
      name: '',
      phone: '',
      address: '',
    },
  })

  useEffect(() => {
    if (logedInUser?.data) {
      updateUserForm.reset({
        name: logedInUser.data.name,
        phone: logedInUser.data.phone,
        address: logedInUser.data.address || '',
      });
    }
  }, [logedInUser, updateUserForm]);


  // update password form
  const updatePasswordForm = useForm<z.infer<typeof updatePasswordZodSchema>>({
    resolver: zodResolver(updatePasswordZodSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  })

  // Toogle current password visability
  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  // Toogle confirm password visability
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Toogle new password visability
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  // Update user
  const handleUpdateUser = async (data: z.infer<typeof updateUserZodSchema>) => {
    const loadingId = toast.loading('Loading...')
    const updatedData = {
      name: data?.name,
      phone: data?.phone,
      address: data?.address
    }
    try {
      const res = await updateUser(updatedData).unwrap()
      if (res?.success) {
        toast.success('User updated successfully.', { id: loadingId })
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error?.data?.message, { id: loadingId })
    }
  }

  // Update password
  const handleUpdatePassword = async (data: z.infer<typeof updatePasswordZodSchema>) => {
    const loadingId = toast.loading('Loading...')
    const passwordInfo = {
      currentPassword: data?.currentPassword,
      newPassword: data?.newPassword
    }
    try {
      const res = await changePassword(passwordInfo).unwrap()
      if (res?.success) {
        toast.success('Password Updated.', { id: loadingId })
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error?.data?.message, { id: loadingId })
    }
  }

  return (
    <div className='flex gap-5 flex-col lg:flex-row'>
      <div className='flex-2 bg-card text-card-foreground p-5 rounded-lg border'>
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
      <div className='flex-5 rounded-lg bg-card text-card-foreground p-5 border'>
        <div className='flex items-center justify-between'>
          <h3 className=' text-2xl font-bold'>My Profile</h3>
          <Edit onClick={() => setEdit(!edit)} className='cursor-pointer' />
        </div>
        <hr className='my-5' />


        {edit ?
          <div>
            <Form {...updateUserForm}>
              <form id='updateUserForm' className='flex gap-8 flex-col xl:flex-row items-stretch' onSubmit={updateUserForm.handleSubmit(handleUpdateUser)}>
                <div className='xl:flex-2 flex flex-col gap-5'>
                  {/* Full Name Input */}
                  <div className="space-y-2">
                    <FormField
                      control={updateUserForm.control}
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
                      control={updateUserForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <div className='relative'>
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                                <Phone />
                              </div>
                              <Input className='flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white px-3 py-2 pl-10 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50' placeholder="Valid Phone Number" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* address Input */}
                  <div className="space-y-2">
                    <FormField
                      control={updateUserForm.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <div className='relative'>
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                                <LocationEditIcon />
                              </div>
                              <Input className='flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white  px-3 py-2 pl-10 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50' placeholder="Address" {...field} />
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

              <Button form='updateUserForm' className='mt-5 w-full lg:w-auto'>Update Profile</Button>
            </Form>

            <div className='flex items-center justify-between mt-10'>
              <h3 className=' text-2xl font-bold'>Change Password</h3>
            </div>
            <hr className='my-5' />

            {/* change password form  */}
            <Form {...updatePasswordForm}>
              <form id='updatePasswordForm' className='flex gap-8 flex-col xl:flex-row items-stretch' onSubmit={updatePasswordForm.handleSubmit(handleUpdatePassword)}>
                <div className='xl:flex-2 flex flex-col gap-5'>
                  {/* current Password Input */}
                  <div className="space-y-2">
                    <FormField
                      control={updatePasswordForm.control}
                      name="currentPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Password</FormLabel>
                          <FormControl>
                            <div className='relative'>
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                                <LockIcon />
                              </div>
                              <Input className='flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white  px-3 py-2 pl-10 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50' placeholder="Current Password" type={showCurrentPassword ? 'text' : 'password'} {...field} />

                              {/* toggle password  */}
                              <button
                                type="button"
                                onClick={toggleCurrentPasswordVisibility}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                              >
                                {showCurrentPassword ? <EyeOffIcon /> : <EyeIcon />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className='flex items-center gap-5'>
                    {/* new password field  */}
                    <div className="space-y-2 w-full">
                      <FormField
                        control={updatePasswordForm.control}
                        name="newPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>New Password</FormLabel>
                            <FormControl>
                              <div className='relative'>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                                  <LockIcon />
                                </div>
                                <Input className='flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white  px-3 py-2 pl-10 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50' placeholder="New Password" type={showNewPassword ? 'text' : 'password'} {...field} />

                                {/* toggle password  */}
                                <button
                                  type="button"
                                  onClick={toggleNewPasswordVisibility}
                                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                >
                                  {showNewPassword ? <EyeOffIcon /> : <EyeIcon />}
                                </button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* confirm password field  */}
                    <div className="space-y-2 w-full">
                      <FormField
                        control={updatePasswordForm.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                              <div className='relative'>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                                  <LockIcon />
                                </div>
                                <Input className='flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white  px-3 py-2 pl-10 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50' placeholder="Confirm Password" type={showConfirmPassword ? 'text' : 'password'} {...field} />

                                {/* toggle password  */}
                                <button
                                  type="button"
                                  onClick={toggleConfirmPasswordVisibility}
                                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                >
                                  {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                                </button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>

              </form>

              <Button form='updatePasswordForm' type='submit' className='mt-5 w-full lg:w-auto'>Update Password</Button>
            </Form>
          </div>
          :
          <div>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <Label className='text-lg text-gray-500 mb-2'><User /> Full Name</Label>
                <p className='text-lg font-bold'>{logedInUser?.data?.name}</p>
              </div>
              <div>
                <Label className='text-lg text-gray-500 mb-2'><MailIcon /> Email</Label>
                <p className='text-lg font-bold'>{logedInUser?.data?.email}</p>
              </div>
              <div>
                <Label className='text-lg text-gray-500 mb-2'><PhoneCall /> Number</Label>
                <p className='text-lg font-bold'>{logedInUser?.data?.phone}</p>
              </div>
              {logedInUser?.data?.address &&
                <div>
                  <Label className='text-lg text-gray-300 mb-2'><User /> Address</Label>
                  <p className='text-lg font-bold'>{logedInUser?.data?.address}</p>
                </div>
              }
            </div>
          </div>
        }




      </div>
    </div>
  )
}

export default Profile
