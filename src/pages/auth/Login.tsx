import LoginForm from "@/components/forms/LoginForm"
import logo from '../../assets/images/logo/logo.png'
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center mb-5">
        <Link to='/'>
          <div className='flex items-center gap-1'>
            <img src={logo} className='w-[40px] lg:w-[60px]' alt="payra pay logo" />
            <h2 className='font-bold text-xl lg:text-3xl mb-3'>Login To Payra Pay</h2>
          </div>
        </Link>
      </div>
      <LoginForm />
    </div>
  )
}

export default Login
