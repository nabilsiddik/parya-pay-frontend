import SignUpForm from "@/components/forms/SignUpForm"
import Logo from "@/components/Logo"
import { Link } from "react-router-dom"

const SignUp = () => {
    return (
        <div className="mt-10">
            <div className="flex justify-center">
                <Link to='/'>
                    <Logo/>
                </Link>
            </div>
            <h1 className='font-bold text-center text-3xl mt-3 mb-5 '>Create Payra Pay Account</h1>
            <SignUpForm />
        </div>
    )
}

export default SignUp
