import { Title } from "./../../components/Title/index";
import { Card } from "./../../components/Card/index";
import Head from "next/head";

export default function Events({ events_list }) {
  return (
    <>
      <Head>
        <title> .events </title> <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center flex-grow overflow-y-scroll font-body">
        <div className="max-w-5xl px-8">
          <Title>HACKATHONS</Title>
          <div className="flex flex-wrap items-center justify-start gap-10">
            {events_list.map((value) => {
              if (value?.theme === "0") {
                const completed = new Date(value.date) - new Date() < 0;
                return <Card key={value.title + value.id} title={value.title} subtitle={value.date.split("-").join("/")} img={value.image} id={parseInt(value.id)} completed={completed} />;
              }
            })}
          </div>
          <Title>CTF</Title>
          <div className="flex flex-wrap items-center justify-start gap-10">
            {events_list.map((value) => {
              if (value?.theme === "1") {
                const completed = new Date(value.date) - new Date() < 0;
                return <Card key={value.title + value.id} title={value.title} subtitle={value.date.split("-").join("/")} img={value.image} id={parseInt(value.id)} completed={completed} />;
              }
            })}
          </div>
          <Title>DIVERS</Title>
          <div className="flex flex-wrap items-center justify-start gap-10">
            {events_list.map((value) => {
              if (value?.theme === "2") {
                const completed = new Date(value.date) - new Date() < 0;
                return <Card key={value.title + value.id} title={value.title} subtitle={value.date.split("-").join("/")} img={value.image} id={parseInt(value.id)} completed={completed} />;
              }
            })}
          </div>
        </div>
      </main>
    </>
  );
}
