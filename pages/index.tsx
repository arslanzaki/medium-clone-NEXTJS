import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Medium Clone</title>
      </Head>

      <Header />
    </div>
  );
};

export default Home;
