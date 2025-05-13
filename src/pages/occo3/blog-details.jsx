import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import BlogDetails1 from "@/components/occo3/BlogDetails1";
import StartupAgencyCTA from "@/components/occo3/StartupAgencyCTA";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>Blog Details</title>
        <meta name="description" content="Blog Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3occo" footer="footer2">
          <BlogDetails1 />
          <StartupAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default BlogDetails;
