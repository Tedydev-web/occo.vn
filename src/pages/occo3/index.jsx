import RootLayout from "@/components/common/layout/RootLayout";
import Head from "next/head";
import ServiceV6Hero from "@/components/occo3/ServiceV6Hero";
import DigitalAgencyRoll from "@/components/occo3/DigitalAgencyRoll";
import CreativeAgencyAbout from "@/components/occo3/CreativeAgencyAbout";
import StartupAgencySolution from "@/components/occo3/StartupAgencySolution";
import Service1 from "@/components/occo3/Service1";
import ModernAgencySingleImage from "@/components/occo3/ModernAgencySingleImage";
import StartupAgencyCTA from "@/components/occo3/StartupAgencyCTA";

const Occo3Landing = () => {
  return (
    <>
      <Head>
        <title>Occo3 Landing</title>
        <meta name="description" content="Occo3 Landing Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3occo" footer="footer2">
          <ServiceV6Hero />
          <DigitalAgencyRoll />
          <CreativeAgencyAbout />
          <Service1 />
          <ModernAgencySingleImage />
          <StartupAgencySolution />
          <StartupAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Occo3Landing;
