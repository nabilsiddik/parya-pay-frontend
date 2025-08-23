
const SectionHeading = ({title}: {title: string}) => {
  return (
    <div className="mb-10 text-center">
      <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">{title && title}</h1>
    </div>
  )
}

export default SectionHeading
