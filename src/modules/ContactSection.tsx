
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

const ContactSection = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "+8801957282230",
  email = "nabilsiddik90@gmail.com",
  web = { label: "nabilsiddik.netlify.app", url: "https://nabilsiddik.netlify.app" },
}: Contact2Props) => {

  const [isSubmited, setIsSubmited] = useState(false)
  const [disable, setDisable] = useState(true)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [yourEmail, setYourEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if(firstName === '' || lastName === '' || yourEmail === '' || subject === '' || message === ''){
      setDisable(true)
    }else{
      setDisable(false)
    }
  }, [firstName, lastName, yourEmail, subject, message])

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    
    console.log(firstName, lastName, email, subject, message);
    setIsSubmited(true)
  }

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col  gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-4xl md:text-5xl font-semibold lg:mb-1 lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-4 text-center text-2xl font-semibold lg:text-left">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Phone: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold">Web: </span>
                  <a href={web.url} target="_blank" className="underline">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {isSubmited ?

            <div className="text-center">
              <h2 className="text-xl font-medium text-green-600 mb-2">Successfully Send Message!</h2>
              <p>Thank you for sending message. We will contact you shortly.</p>
            </div>

            :


            <form onSubmit={handleSendMessage} className="mx-auto flex max-w-3xl flex-col gap-6 rounded-lg border p-10">
              <div className="flex gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="firstname">First Name</Label>
                  <Input onChange={(e) => setFirstName(e.target.value)} name='firstName' type="text" id="firstname" placeholder="First Name" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input onChange={(e) => setLastName(e.target.value)} name='lastName' type="text" id="lastname" placeholder="Last Name" />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input onChange={(e) => setYourEmail(e.target.value)} name='email' type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input onChange={(e) => setSubject(e.target.value)} name='subject' type="text" id="subject" placeholder="Subject" />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea onChange={(e) => setMessage(e.target.value)} name='message' placeholder="Type your message here." id="message" />
              </div>
              <Button disabled={disable} type="submit" className="w-full">Send Message</Button>
            </form>

          }

        </div>
      </div>
    </section>
  );
};

export default ContactSection
