// Libraries
import Head from "next/head";
import Image from "next/image";

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
          content="Site de l'association KASAR, ECE Paris, orienté événementiel sur le thème de l'IA."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center flex-grow w-full overflow-y-scroll font-body">
        <div className="flex flex-col justify-center w-full max-w-5xl">
          <div className="grid">
            <h1 className="flex flex-col items-center mt-10">
              <span className="z-50 text-4xl font-logo-light">
                Bienvenue sur
              </span>
              <span className="z-50 text-transparent text-7xl font-logo bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Kasar
              </span>
            </h1>
            <Image src={RobotKasar} alt="Robot kasar" />
          </div>
          <Image src={BgHero} alt="La team kasar 2021-2022" />
        </div>
      </main>
    </>
  );
}
