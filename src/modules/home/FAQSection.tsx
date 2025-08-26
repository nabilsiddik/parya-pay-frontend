import Accordion from '@/components/Accordion'

const FAQSection = () => {
  return (
    <div className='container mx-auto px-5 mb-30 mt-10'>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-10">
        FAQ
      </h1>
      <Accordion />
    </div>
  )
}

export default FAQSection
