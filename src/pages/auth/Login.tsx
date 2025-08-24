import LoginForm from "@/components/forms/LoginForm"
import Logo from "@/components/Logo"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <h1 className='font-bold text-center text-3xl mt-3 mb-5 '>Login to Payra Pay</h1>
      <LoginForm />
    </div>
  )
}

export default Login
