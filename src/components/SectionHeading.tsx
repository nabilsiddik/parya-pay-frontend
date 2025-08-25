import SlideInText from "./SlideInText"

const SectionHeading = ({title, className}: {title: string, className?: any}) => {
  return (
    <div className="mb-6 text-center">
      <h1 className={`font-semibold text-2xl md:text-3xl lg:text-4xl ${className}`}> <SlideInText text={title && title}/></h1>
    </div>
  )
}

export default SectionHeading
