export const runtime = "edge";

import { Navbar } from "@/components/layout/navbar";
import { BenefitsSection } from "@/components/sections/benefits.section";
import { Footer } from "@/components/sections/footer.section";
import { HeroSection } from "@/components/sections/hero.section";

export default async function Home() {
  return (
    <main>
      <div className="absolute top-0 z-[-2] h-full w-full bg-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#f8e0ff30_10px,transparent_1px),linear-gradient(to_bottom,#4f4f4f00_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      <div className="absolute top-0 z-[-1] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(180,119,198,0.2),rgba(255,255,255,0))]"></div>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <Footer />
    </main>
  );
}
