import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Blocks, CloudCog, KeyRound, Sparkle } from "lucide-react";
import { ReactElement } from "react";

interface BenefitsProps {
  icon: ReactElement<any, any>;
  title: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: (
      <Blocks
        size={32}
        color="hsl(var(--primary))"
        className="mb-6 text-primary"
      />
    ),
    title: "NextJS",
  },
  {
    icon: (
      <CloudCog
        size={32}
        color="hsl(var(--primary))"
        className="mb-6 text-primary"
      />
    ),
    title: "Clouflare",
  },
  {
    icon: (
      <KeyRound
        size={32}
        color="hsl(var(--primary))"
        className="mb-6 text-primary"
      />
    ),
    title: "Auth",
  },
  {
    icon: (
      <Sparkle
        size={32}
        color="hsl(var(--primary))"
        className="mb-6 text-primary"
      />
    ),
    title: "Drizzle",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32 ">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg mb-2 tracking-wider from-mypink to-mypurple text-transparent bg-clip-text bg-gradient-to-r">
            Benefits
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 py-4">
            What&apos;s included?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            This repo comes fully stacked with everything you need for your
            enterprise startup. Stop worrying about boilerplate integrations and
            start building your product today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title }, index) => (
            <Card
              key={title}
              className="bg-muted/30 hover:bg-background transition-all delay-75 group/number p-2 duration-200 hover:scale-105 hover:border-mypink"
            >
              <CardHeader>
                <div className="flex justify-between">
                  {icon}
                  <span className="opacity-50 text-5xl font-medium transition-all delay-75 group-hover/number:text-muted-foreground/50 from-mypink to-mypurple text-transparent bg-clip-text bg-gradient-to-r">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
