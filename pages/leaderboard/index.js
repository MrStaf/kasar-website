// Libraries
import Identicon from "identicon.js";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Assets
import logo from "../../img/kasar.png";



export default function Leaderboard() {
  let data = new Identicon("c157a79031e1c40f85931829bc5fc666", 100);
  return (
    <div id="links-main" className="flex flex-col items-center h-full pt-8">
      <Head>
        <title>CTF Leaderboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center h-full text-white">
        <div className="flex items-center gap-8 mb-16">
          <h1 className="text-4xl font-logo">Leaderboard</h1>
          <Image src={logo} width="80px" height="80px" alt="logo kasar" />
        </div>
        <div className="relative items-end justify-around">
          <div className="flex flex-col items-center justify-center">
            <div
              className="w-24 h-24 rounded-full"
              style={{
                boxShadow: "0px 0px 15px 0px rgba(229,228,62,0.75)",
                border: "3px solid rgba(229,228,62,1)",
              }}
            >
              <Image
                alt="logo second"
                width={96}
                height={96}
                src={`data:image/png;base64,${data}`}
                className="w-24 h-24 rounded-full"
              />
            </div>
            <div
              className="absolute flex flex-col items-center justify-center rounded-full h-7 w-7"
              style={{
                boxShadow: "0px 0px 15px 0px rgba(229,228,62,0.75)",
                background: "rgba(229,228,62,1)",
                color: "#000000",
                bottom: "-0.75rem",
              }}
            >
              <p>1</p>
            </div>
            <div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </main>
    </div>
  );
}
