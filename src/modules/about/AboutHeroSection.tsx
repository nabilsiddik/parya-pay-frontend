import SlideInText from '@/components/SlideInText'
import aboutHeroBg from '../../assets/images/about/about-hero-bg.jpg'

const AboutHeroSection = () => {
  return (
    <div className="h-[700px] flex items-center justify-center  relative" style={{
        backgroundImage: `url(${aboutHeroBg})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }}>
        <div className='absolute inset-0 bg-black/50 z-0'></div>
        <div className='text-center px-10 md:px-20 relative'>
            <h1 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl z-1 mt-24 md:mt-30 text-center'><SlideInText text='From City To Village, Everyone is fan of Payra Pay'/></h1>
            
        </div>
        
    </div>
  )
}

export default AboutHeroSection
