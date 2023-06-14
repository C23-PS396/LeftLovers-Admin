import Navbar from "@/components/layout/navbar/Navbar";
import Landing from "@/components/pages/landing/Landing";
import Order from "@/components/pages/order/Order";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>LeftLovers Apps</title>
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
      <Order />
    </>
  );
}
