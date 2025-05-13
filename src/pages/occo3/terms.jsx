import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Term1 from "@/components/occo3/Term1";
import StartupAgencyCTA from "@/components/occo3/StartupAgencyCTA";

const Term = () => {
  return (
    <>
      <Head>
        <title>Term</title>
        <meta name="description" content="Term Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3occo" footer="footer2">
          <Term1 />
          <StartupAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Term;
