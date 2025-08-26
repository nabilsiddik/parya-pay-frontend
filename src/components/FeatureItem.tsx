
const FeatureItem = ({title, description, alignmentClasses}: {title: string, description: string, alignmentClasses?: string}) => {
  return (
    <div className={`${alignmentClasses} bg-[#ffeff6] lg:bg-transparent dark:bg-card py-10 px-10 sm:px-40 lg:px-0 rounded-md`}>
      <h2 className="font-bold text-primary md:text-2xl text-xl">{title && title}</h2>
      <p className="font-medium mt-2">{description && description}</p>
    </div>
  )
}

export default FeatureItem
