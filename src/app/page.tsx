import PageWrapper from "@/common/components/PageWrapper";
import Hero from "@/components/Hero";
import Socials from "@/components/Socials";
import Breakline from "@/common/components/Breakline";
import Links from "@/components/Links";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <PageWrapper>
      <>
        <Hero />
        <div className="p-6 space-y-5">
          <Socials />
          <Breakline />
          <Links />
          <Breakline />
          <Contact />
        </div>
      </>
    </PageWrapper>
  );
}
