import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from '../assets/images/payra-pay.png'

interface Hero47Props {
  heading?: string;
  subheading?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const HeroSection = ({
  buttons = {
    primary: {
      text: "Get Started",
      url: "/transactions",
    },
    secondary: {
      text: "Saved Numbers",
      url: "/",
    },
  },
  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg",
    alt: "Placeholder",
  },
}: Hero47Props) => {
  return (
    <section className="bg-background py-20 lg:py-32 mt-[60px] lg:mt-0">
      <div className="container flex flex-col items-center gap-10 lg:my-0 lg:flex-row">
        <div className="flex flex-col gap-7 lg:w-2/3">
          <h2 className="text-5xl font-semibold text-foreground md:text-5xl xl:text-7xl xl:pr-30">
            <span>Payra Pay, </span>
            <span className="text-muted-foreground">
              Your Money, Your Freedom</span>
          </h2>
          <p className="text-base text-muted-foreground md:text-lg lg:text-xl xl:pr-30">
            "Experience the fastest, most secure, and hassle-free way to manage your money. With our digital wallet, you can add, send, receive, and withdraw funds anytime, anywhere — all from one simple app."
          </p>
          <div className="flex flex-wrap items-start gap-5 lg:gap-7">
            <Button asChild>
              <a href={buttons.primary?.url}>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="size-4" />
                </div>
                <span className="pr-6 pl-4 text-sm whitespace-nowrap lg:pr-8 lg:pl-6 lg:text-base">
                  {buttons.primary?.text}
                </span>
              </a>
            </Button>
            <Button asChild variant="link" className="underline">
              <a href={buttons.secondary?.url}>{buttons.secondary?.text}</a>
            </Button>
          </div>
        </div>
        <div className="relative z-10">
          <div className="absolute top-2.5 left-1/2! h-[92%]! w-[69%]! -translate-x-[52%] overflow-hidden rounded-[35px]">
            <img
              src={image.src}
              alt={image.alt}
              className="size-full object-cover object-[50%_0%]"
            />
          </div>
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
