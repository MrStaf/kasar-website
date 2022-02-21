// Libraries
import Head from "next/head";
import Image from "next/image";

// Components
import { Title } from "../../components/Title/";

// SVG
import RobotKasar from "../../img/robot.svg";
import BgHero from "../../img/bg-hero.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kasar</title>
        <meta
          name="description"
          content="Site de l&#39;association KASAR, ECE Paris, orienté événementiel sur le thème de l&#39;IA."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center flex-grow w-full overflow-y-scroll font-body">
        <div className="flex flex-col justify-center w-full max-w-5xl mb-4">
          <div className="grid">
            <h1 className="flex flex-col items-center mt-10">
              <span className="text-4xl font-logo-light">
                Bienvenue sur
              </span>
              <span className="text-transparent text-7xl font-logo bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Kasar
              </span>
            </h1>
            <Image src={RobotKasar} alt="Robot kasar" />
          </div>
          <div className="px-8 mb-4">
            <Title>Notre mission</Title>
            <p className="text-justify">
              <span className="font-bold text-primary">Kasar</span> est une association de l&apos;ECE Paris, qui a pour but de
              démystifier l’intelligence artificielle, et de former une
              communauté d&apos;entraide et de partage autour du machine
              learning.
            </p>
          </div>
          <Image src={BgHero} alt="La team kasar 2021-2022"/>
        </div>
      </main>
    </>
  );
}
