import { Title } from "./../../components/Title/index";
import { Card } from "./../../components/Card/index";
import Head from "next/head";

export default function Events() {
  return (
    <>
      <Head>
        <title> .events </title> <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center flex-grow overflow-y-scroll font-body">
        <div className="w-full px-8 max-w-7xl">
          <Title>HACKATHONS</Title>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <Card title="Premier Hackathon" subtitle="20/10/2021" id={1} />
            <Card title="Deuxième Hackathon" subtitle="09/01/2022" id={2} />
            <Card title="Semaine de l'IA" subtitle="07-10/02/2022" id={3} />
            <Card title="Coupe de l'IA" subtitle="23/03/2022" id={3} />
          </div>
          <Title>BARMAN</Title>
          <div className="flex flex-wrap justify-center gap-10">
            <Card title="Premier Hackathon" subtitle="20/10/2021" id={4} />
            <Card title="Deuxième Hackathon" subtitle="09/01/2022" id={5} />
            <Card title="Semaine de l'IA" subtitle="07-10/02/2022" id={6} />
          </div>
        </div>
      </main>
    </>
  );
}
