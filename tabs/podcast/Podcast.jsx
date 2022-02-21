import Head from "next/head";
import { Section } from "./../../components/Section/index";
import { Line } from "./../../components/Line/index";

export default function Podcast({ podcasts, active, setActive }) {
  // console.log(podcasts, "podcast");
  return (
    <>
      <Head>
        <title>.podcasts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center flex-grow font-body">
        <Section>
          {podcasts?.items?.reverse().map((itm) => {
            return <Line key={itm?.guid} id={itm?.guid} title={itm?.title} ep={`S${itm?.season} E${itm?.episode}`} img={itm?.itunes?.image} active={active} setActive={setActive} />;
          })}
          <p className="w-full text-6xl text-center text-white animate-pulse">...</p>
        </Section>
      </main>
    </>
  );
}
