import SectionHeading from '@/components/SectionHeading'
import visionImage from '../../assets/images/about/vision.jpg'

const VisionSection = () => {
    return (
        <div className='bg-[#ffeff6] dark:bg-background'>
            <div className="container mx-auto py-10 px-5">
                <div className="flex flex-col gap-10 lg:flex-row items-center max-w-6xl mx-auto">
                    <div>
                        <SectionHeading className='text-center lg:text-left' title="Our Mission" />
                        <p>"Our mission is to simplify financial transactions by providing a secure, fast, and convenient digital wallet platform. We empower individuals and businesses to manage, send, and receive money seamlessly, ensuring financial accessibility and efficiency for everyone."</p>
                    </div>
                    <div>
                        <img className="max-w-[200px] lg:max-w-[400px]" src={visionImage} alt="mission" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisionSection
