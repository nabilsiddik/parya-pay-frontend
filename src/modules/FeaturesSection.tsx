import FeatureItem from '@/components/FeatureItem'
import featuresImg from '../assets/images/payra-pay.png'
import SlideInUp from '@/animation/slide/SlideInUp'
import FadeIn from '@/animation/fade/FadeIn'
import SlideToRight from '@/animation/slide/SlideToRight'
import SlideToLeft from '@/animation/slide/SlideToLeft'

const FeaturesSection = () => {
    return (
        <div className="container px-5 mx-auto my-30">
            <SlideInUp>
                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tighter animate-fade-in-down">
                        Features of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Payra Pay</span>
                    </h1>

                    <p className="text-gray-600 dark:text-gray-300 mt-6 text-base sm:text-lg max-w-2xl mx-auto animate-fade-in-down" style={{ animationDelay: '0.4s' }}>
                        From instant transfers to exclusive rewards, everything you need is in one secure app.
                    </p>
                </div>
            </SlideInUp>

            <div className="flex gap-5 flex-col lg:flex-row items-stretch">
                <div className='flex-1 flex flex-col justify-evenly gap-10 lg:gap-0'>
                    <div>
                        <SlideToRight>
                            <FeatureItem title='Instant Money Transfer' description='Send and receive money anytime, anywhere, in just seconds.' alignmentClasses='text-center lg:text-right lg:dark:pr-10' />
                        </SlideToRight>

                    </div>
                    <div>
                        <SlideToRight>
                            <FeatureItem title='Secure QR Payments' description='Pay merchants, agents, and peers by simply scanning QR codes securely.' alignmentClasses='text-center lg:text-right lg:dark:pr-10' />
                        </SlideToRight>
                    </div>
                    <div>
                        <SlideToRight>
                            <FeatureItem title='Easy Bill Payments' description='Easily pay electricity, water, internet, and other utility bills from your wallet.' alignmentClasses='text-center lg:text-right lg:dark:pr-10' />
                        </SlideToRight>

                    </div>
                </div>
                <div className='mx-auto flex-1'>
                    <FadeIn>
                        <img src={featuresImg} alt="features" />
                    </FadeIn>
                </div>
                <div className='flex-1 flex flex-col justify-evenly gap-10 lg:gap-0'>
                    <div>
                        <SlideToLeft>
                            <FeatureItem title='Mobile Recharge' description='Recharge your phone instantly for any operator, anytime you need.' alignmentClasses='text-center lg:text-left lg:dark:pl-10' />
                        </SlideToLeft>
                    </div>
                    <div>
                        <SlideToLeft>
                            <FeatureItem title='Robust Security' description='Your transactions are protected with PIN, verification codes, and top-grade encryption.' alignmentClasses='text-center lg:text-left lg:dark:pl-10' />
                        </SlideToLeft>
                    </div>
                    <div>
                        <SlideToLeft>
                            <FeatureItem title='Card & Bank Integration' description='Link your debit/credit card or bank account for seamless add money and withdrawals.' alignmentClasses='text-center lg:text-left lg:dark:pl-10' />
                        </SlideToLeft>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesSection
