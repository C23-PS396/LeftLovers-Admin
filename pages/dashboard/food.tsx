import Navbar from "@/components/layout/navbar/Navbar";
import Food from "@/components/pages/food/Food";
import Head from "next/head";

export default function DashboardFood() {
  return (
    <>
      <Head>
        <title>LeftLovers Apps | Dashboard - Food</title>
        <link rel="icon" href="/logo.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="The easiest customizable URL shortener, ever."
        />
        <meta
          name="og:title"
          content="The easiest customizable URL shortener, ever."
        />
      </Head>
      <Navbar type="merchant" />
      <Food />
    </>
  );
}
