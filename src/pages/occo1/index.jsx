import RootLayout from "@/components/common/layout/RootLayout";
import AboutHero from "@/components/occo1/AboutHero";
import CreativeAgencyAbout from "@/components/occo1/CreativeAgencyAbout";
import PortfolioElementV2 from "@/components/occo1/PortfolioElementV2";
import StartupAgencyBrand from "@/components/occo1/StartupAgencyBrand";
import StartupAgencyFeature from "@/components/occo1/StartupAgencyFeature";
import StartupAgencyTestimonial from "@/components/occo1/StartupAgencyTestimonial";
import DigitalAgencyCTA from "@/components/occo1/DigitalAgencyCTA";
import Head from "next/head";

const Occo1Landing = () => {
  return (
    <>
      <Head>
        <title>Occo1 Landing</title>
        <meta name="description" content="Occo1 Landing Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer1">
          <AboutHero />
          <CreativeAgencyAbout />
          <PortfolioElementV2 />
          <StartupAgencyBrand />
          <StartupAgencyFeature />
          <StartupAgencyTestimonial />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Occo1Landing;
