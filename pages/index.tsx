import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>
          Kuldeep Tripathi | Frontend Developer | Professional Portfolio
        </title>
        <link rel="shortcut icon" href="/kt.png" />
        <meta
          name="description"
          content="Kuldeep Tripathi | Frontend Developer | Professional Portfolio"
        />

        <meta
          property="og:title"
          content="Kuldeep Tripathi | Frontend Developer | Professional Portfolio"
        />
        <meta
          name="description"
          content="Hey! I'm Kuldeep Tripathi, and I'm a Frontend Developer."
        />

        <meta
          property="og:title"
          content="Kuldeep Tripathi | Frontend Developer | Professional Portfolio"
        />
        {/* <meta property="og:type" content="article" /> */}
        {/* To CHange the url */}
        {/* <meta property="og:url" content="https://deverajc.com/" /> */}
        {/* Portfolio thumbnail Image */}
        {/* <meta
          property="og:image"
          content="https://deverajc.com/screenshot.png"
        /> */}
        <meta
          property="og:description"
          content="Hey! I'm Kuldeep Tripathi, and I'm a Frontend Developer."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@jc_devz" />
        <meta
          name="twitter:title"
          content="Kuldeep Tripathi | Frontend Developer | Professional Portfolio"
        />
        <meta
          name="twitter:description"
          content="Hey! I'm Kuldeep Tripathi, and I'm a Frontend Developer ."
        />
        <meta name="twitter:creator" content="@jc_devz" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Home />
    </>
  );
}
