import SignUpForm from "@/components/forms/SignUpForm"
import logo from '../../assets/images/logo/logo.png'
import { Link } from "react-router-dom"

const SignUp = () => {
    return (
        <div className="mt-10">
            <Link to='/'>
                <div className="flex justify-center ">
                    <div className='flex items-center gap-1'>
                        <img src={logo} className='w-[40px] lg:w-[60px]' alt="payra pay logo" />
                        <h2 className='font-bold text-xl lg:text-3xl mb-3'>Create Payra Pay Account</h2>
                    </div>
                </div>
            </Link>
            <SignUpForm />
        </div>
    )
}

export default SignUp
