import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Blog1 from "@/components/occo3/Blog1";
import StartupAgencyCTA from "@/components/occo3/StartupAgencyCTA";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3occo" footer="footer2">
          <Blog1 />
          <StartupAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Blog;
