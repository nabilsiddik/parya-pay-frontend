import logo from '../assets/images/logo/logo.png'
const Logo = () => {
    return (
        <div className='flex items-center gap-1'>
            <img src={logo} className='w-[60px]' alt="payra pay logo" />
            <h2 className='font-bold text-2xl mb-3'>Payra Pay</h2>
        </div>
    )
}

export default Logo
