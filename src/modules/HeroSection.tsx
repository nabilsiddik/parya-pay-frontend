import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from '../assets/images/payra-pay.png'
import { useGetCurrentUserQuery } from "@/redux/features/auth/auth.api";
import { useEffect, useState } from "react";
import { getDynamicDashboardUrl } from "@/utils/getDynamicDashboardUrl";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { data } = useGetCurrentUserQuery(undefined)
  const [dashboardUrl, setDashboardUrl] = useState('/login')

  // Dynamic dashboard url
  useEffect(() => {
    if (!data?.data?.role) return;
    setDashboardUrl(getDynamicDashboardUrl(data?.data))
  }, [data?.data?.role]);

  return (
    <section className="bg-background py-20 lg:py-32 mt-[60px] lg:mt-0">
      <div className="container flex flex-col items-center gap-10 lg:my-0 lg:flex-row">
        <div className="flex flex-col gap-7 lg:w-2/3  text-center lg:text-left">
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl xl:text-7xl xl:pr-30 leading-13 xl:leading-24">
            <span>Payra Pay | </span>
            <span className="text-muted-foreground">
              Your Money, Your Freedom</span>
          </h2>
          <p className="text-base text-muted-foreground md:text-lg lg:text-xl xl:pr-30">
            "Experience the fastest, most secure, and hassle-free way to manage your money. With our digital wallet, you can add, send, receive, and withdraw funds anytime, anywhere — all from one simple app."
          </p>
          <div className="flex flex-wrap items-center gap-2 md:gap-4 justify-center lg:justify-start lg:gap-7">
            <Link to={dashboardUrl}>
              <Button className="cursor-pointer">
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="size-4" />
                </div>
                <span className="pr-6 pl-4 text-sm whitespace-nowrap lg:pr-8 lg:pl-6 lg:text-base">
                  Get Started
                </span>
              </Button>
            </Link>
            {/* <Button variant="link" className="underline">
              Add Contact
            </Button> */}
          </div>
        </div>
        <div className="relative z-10">
          <img
            className="relative z-10"
            src={heroImage}
            width={450}
            height={889}
            alt="iphone"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
