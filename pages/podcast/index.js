import Head from "next/head";
import { Header } from "./../../components/Header/index";
import { Footer } from "./../../components/Footer/index";
import { Section } from "./../../components/Section/index";
import { Line } from "./../../components/Line/index";

export default function Events() {
  return (
    <>
      <Head>
        <title>.podcasts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center flex-grow font-body">
        <Section>
          <Line title="A la découverte de la NLP" ep="S0 E0" active={true} />
          <Line title="A la découverte de la NLP" ep="S0 E1" />
          <Line title="A la découverte de la NLP" ep="S0 E2" />
          <Line title="A la découverte de la NLP" ep="S0 E3" />
          <p className="w-full text-6xl text-center text-white animate-pulse">...</p>
        </Section>
      </main>

      <Footer fixed={false} />
    </>
  );
}
