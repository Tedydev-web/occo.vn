import DigitalAgencyBrand from "@/components/brand/DigitalAgencyBrand";
import RootLayout from "@/components/common/layout/RootLayout";
import AboutCounter from "@/components/counter/AboutCounter";
import AboutStory from "@/components/story/AboutStory";
import AboutTeam from "@/components/team/AboutTeam";
import AboutTestimonial from "@/components/testimonial/AboutTestimonial";
import CreativeAgencyHero from "@/components/occo3/CreativeAgencyHero";
import StartupAgencyCTA from "@/components/occo3/StartupAgencyCTA";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3occo" footer="footer2">
          <CreativeAgencyHero />
          <AboutStory />
          <AboutCounter />
          <AboutTeam />
          <DigitalAgencyBrand />
          <AboutTestimonial />
          <StartupAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
