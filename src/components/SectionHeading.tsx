import SlideInUp from "@/animation/slide/SlideInUp"

const SectionHeading = ({ title, className }: { title: string, className?: any }) => {
  return (
    <SlideInUp>
      <div className="mb-6 text-center">
        <h1 className={`font-semibold text-2xl md:text-3xl lg:text-4xl ${className}`}>{title && title}</h1>
      </div>
    </SlideInUp>
  )
}

export default SectionHeading
