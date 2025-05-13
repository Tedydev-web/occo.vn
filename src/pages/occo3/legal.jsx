import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Legal1 from "@/components/occo3/Legal1";
import StartupAgencyCTA from "@/components/occo3/StartupAgencyCTA";

const Legal = () => {
  return (
    <>
      <Head>
        <title>Legal</title>
        <meta name="description" content="Legal Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3occo" footer="footer2">
          <Legal1 />
          <StartupAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Legal;
