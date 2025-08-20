import LoginForm from "@/components/forms/LoginForm"
import Logo from "@/components/Logo"

const Login = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <Logo />
      </div>
      <h1 className='font-bold text-center text-3xl mt-3 mb-5 '>Login to Payra Pay</h1>
      <LoginForm />
    </div>
  )
}

export default Login
