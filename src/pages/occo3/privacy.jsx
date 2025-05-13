import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Privacy1 from "@/components/occo3/Privacy1";
import StartupAgencyCTA from "@/components/occo3/StartupAgencyCTA";

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy</title>
        <meta name="description" content="Privacy Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3occo" footer="footer2">
          <Privacy1 />
          <StartupAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Privacy;
