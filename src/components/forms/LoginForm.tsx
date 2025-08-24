import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useGetCurrentUserQuery, useUserSignInMutation } from '@/redux/features/auth/auth.api';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';

const UserIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-zinc-600 dark:text-zinc-400"
    >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const EyeOffIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 text-zinc-500 dark:text-zinc-400"
    >
        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
        <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
);

const MailIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

const LockIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <circle cx="12" cy="16" r="1"></circle>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
);

const EyeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);


export default function LoginForm() {
    const [userSignIn] = useUserSignInMutation()
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const navigate = useNavigate()
    const { data: logedInUser } = useGetCurrentUserQuery(undefined)

    console.log('ami', logedInUser?.data?.role)
    // React hook form
    const form = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    // Toogle password and confirm password
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Handle user login
    const handleUserLogin = async (data: any) => {
        const loginInfo = {
            email: data.email,
            password: data.password
        }
        const signInId = toast.loading('Loading...')

        try {
            const res = await userSignIn(loginInfo).unwrap()

            console.log('my res', res?.data?.user?.role)

            if (res?.success) {
                toast.success('User successfully loged in.', { id: signInId })
                // const role = res?.data?.user?.role
                navigate('/')
            }

        } catch (error: any) {
            toast.error(error?.data?.message, { id: signInId })
        }
    }

    return (
        <div>
            <div className="relative w-full flex items-center justify-center font-sans overflow-hidden">

                {/* Login Card - More compact and shadcn-like */}
                <div className="relative w-full max-w-lg p-6 space-y-6 bg-white dark:bg-black rounded-lg border border-primary dark:border-zinc-800 shadow-lg dark:shadow-zinc-900/50">

                    {/* Header section with icon and title - More compact */}
                    <div className="text-center space-y-3">
                        <div className="inline-flex p-2 bg-zinc-100 dark:bg-zinc-900 rounded-md border border-zinc-200 dark:border-zinc-800">
                            <UserIcon />
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">Welcome back</h1>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Enter your credentials to sign in</p>
                        </div>
                    </div>

                    {/* Social login buttons - More compact shadcn style */}
                    {/* <div className="grid grid-cols-3 gap-2">
                        {[{ icon: <AppleIcon /> }, { icon: <GoogleIcon /> }, { icon: <XIcon /> }].map((item, index) => (
                            <button
                                key={index}
                                className="flex items-center justify-center h-9 px-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
                            >
                                {item.icon}
                            </button>
                        ))}
                    </div> */}

                    {/* OR Divider - More subtle */}
                    {/* <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-zinc-200 dark:border-zinc-800" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white dark:bg-zinc-900 px-2 text-zinc-500 dark:text-zinc-400">
                                Or continue with
                            </span>
                        </div>
                    </div> */}

                    <Form {...form}>
                        {/* Form - Shadcn style */}
                        <form onSubmit={form.handleSubmit(handleUserLogin)} className="space-y-4">

                            {/* Email Input */}
                            <div className="space-y-2">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <div className='relative'>
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                                                        <MailIcon />
                                                    </div>
                                                    <Input className='flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-3 py-2 pl-10 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50' placeholder="Enter email" type='email' {...field} />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Password Input */}
                            <div className="space-y-2">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <div className='relative'>
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                                                        <LockIcon />
                                                    </div>
                                                    <Input className='flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-3 py-2 pl-10 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50' placeholder="Password" type={showPassword ? 'text' : 'password'} {...field} />

                                                    {/* toggle password  */}
                                                    <button
                                                        type="button"
                                                        onClick={togglePasswordVisibility}
                                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                                    >
                                                        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                                                    </button>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <Button
                                type="submit"
                                className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300 disabled:pointer-events-none disabled:opacity-50 bg-primary text-zinc-50 shadow hover:bg-primary dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2 w-full"
                            >
                                Sign In
                            </Button>
                        </form>
                    </Form>


                    {/* Footer links - More compact */}
                    <div className="text-center space-y-2">
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            Don&apos;t have an account?{' '}
                            <Link className='underline' to='/signup'>
                                Sign up
                            </Link>
                        </p>
                        <a href="#" className="text-sm font-medium text-zinc-900 dark:text-zinc-50 underline underline-offset-4 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
                            Forgot your password?
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
