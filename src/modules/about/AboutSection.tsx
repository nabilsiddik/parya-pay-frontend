import SectionHeading from "@/components/SectionHeading"

const AboutSection = () => {
    return (
        <div className="bg-[#ffeff6]">
            <div className="container mx-auto px-6 my-10 py-10">
                <SectionHeading title='About Payra Pay' />
                <p className="text-center max-w-4xl mx-auto">Payra Pay is a secure and seamless digital wallet solution designed to simplify the way people send, receive, and manage money. Built with a focus on speed, safety, and convenience, Payra Pay empowers individuals and businesses to make financial transactions with confidence anytime, anywhere.

                Our mission is to promote a cashless ecosystem that makes digital payments accessible to everyone—whether you’re transferring funds to a loved one, paying bills, shopping online, or growing your business.</p>
            </div>
        </div>
    )
}

export default AboutSection
