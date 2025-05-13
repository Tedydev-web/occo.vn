import RootLayout from "@/components/common/layout/RootLayout";
import Head from "next/head";
import ServiceHero from "@/components/occo2/ServiceHero";
import DigitalMarketingWorkflow from "@/components/occo2/DigitalMarketingWorkflow";
import Service1 from "@/components/occo2/Service1";
import CareerGallery from "@/components/occo2/CareerGallery";
import DesignStudioCTA from "@/components/occo2/DesignStudioCTA";

const Occo2Landing = () => {
  return (
    <>
      <Head>
        <title>Occo2 Landing</title>
        <meta name="description" content="Occo2 Landing Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header1" footer="footer2">
          <ServiceHero />
          <Service1 />
          <CareerGallery />
          <DigitalMarketingWorkflow />
          <DesignStudioCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Occo2Landing;
