import Logo from "@/components/Logo"
import { footerMenu1, footerMenu2 } from "@/data/footerLinkData"
import { Facebook, Github, Linkedin, Youtube } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-gray-900 text-white dark:text-foreground rounded-t-lg">

      <div className="container px-5 my-15 flex justify-between lg:max-w-6xl mx-auto flex-col md:flex-row gap-12">
        <div className="flex flex-col gap-3 flex-5">
          <div>
            <Logo />
          </div>
          <p className="lg:pr-10">"Experience the fastest, most secure, and hassle-free way to manage your money. With our digital wallet, you can add, send, receive, and withdraw funds anytime, anywhere — all from one simple app."</p>
          <ul className="mt-2 flex justify-start gap-6">
            <li>
              <Link target="_blank" to='https://www.facebook.com/codewithnabil'>
                <Facebook/>
              </Link>
            </li>

            <li>
              <Link target="_blank" to='https://www.linkedin.com/in/nabilsiddik/'>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <Linkedin/>
                </svg>
              </Link>
            </li>

            <li>
              <Link target="_blank" to='https://github.com/nabilsiddik'>
                <Github/>
              </Link>
            </li>

            <li>
              <Link target="_blank" to='https://www.youtube.com/@Code-With-Nabil'>
                <Youtube/>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-3 justify-between">
          <div className="flex md:justify-center flex-1">
            <div className="flx-1">
              <p className="font-medium text-white dark:text-white text-xl">Menu</p>

              <ul className="mt-4 space-y-4 text-sm">
                {footerMenu1.length > 0 && footerMenu1.map((item) => {
                  return <li key={item.id}>
                    <Link to={`${item.link}`}>
                      {item?.title}
                    </Link>
                  </li>
                })}

              </ul>
            </div>
          </div>

          <div className="flex md:justify-end flex-3">
            <div>
              <p className="font-medium text-white dark:text-white text-xl">Helpful</p>

              <ul className="mt-4 space-y-4 text-sm">
                {footerMenu2.length > 0 && footerMenu2.map((item) => {
                  return <li key={item.id}>
                    <Link to={`${item.link}`}>
                      {item?.title}
                    </Link>
                  </li>
                })}

              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <p className="text-center dark:text-foreground h-16 flex items-center justify-center">
          &copy; 2025. Payra Pay. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
