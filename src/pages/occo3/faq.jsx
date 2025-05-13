import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Faq1 from "@/components/occo3/Faq1";
import StartupAgencyCTA from "@/components/occo3/StartupAgencyCTA";

const Faq = () => {
  return (
    <>
      <Head>
        <title>Faq</title>
        <meta name="description" content="Faq Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3occo" footer="footer2">
          <Faq1 />
          <StartupAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Faq;
