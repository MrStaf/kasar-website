import { Header } from "./../../components/Header/index";
import { Section } from "./../../components/Section/index";
import { Footer } from "./../../components/Footer/index";
import Head from "next/head";

export default function Events() {
  return (
    <>
      <Head>
        <title>.nous_rejoindre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center flex-grow text-2xl text-white font-text">
        <Section className="justify-around">
          <p className="w-full text-6xl font-bold text-center font-logo-light">Rejoins-nous !</p>
          <div>
            <p>Envoie un mail à</p>
            <div className="flex items-center py-1 pr-3 mt-2 border-2 rounded-lg">
              <svg className="mx-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <a className="italic font-bold" href="mailto:join@kasar.fr">
                join@kasar.fr
              </a>
            </div>
          </div>
          <p className="italic font-bold">ou</p>
          <div>
            <p>Envoie un mp à</p>
            <div className="flex items-center py-1 pr-3 mt-2 border-2 rounded-lg">
              <svg className="mx-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M16 11.3701C16.1234 12.2023 15.9812 13.0523 15.5937 13.7991C15.2062 14.5459 14.5931 15.1515 13.8416 15.5297C13.0901 15.908 12.2384 16.0397 11.4077 15.906C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09402 12.5923C7.96035 11.7616 8.09202 10.91 8.47028 10.1584C8.84854 9.40691 9.45414 8.7938 10.2009 8.4063C10.9477 8.0188 11.7977 7.87665 12.63 8.00006C13.4789 8.12594 14.2648 8.52152 14.8716 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M17.5 6.5H17.51" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <a className="italic font-bold" href="https://www.instagram.com/kasar.ai/" target="_blank">
                @kasar.ia
              </a>
            </div>
          </div>
          <p className="italic font-bold">ou</p>
          <input type="email" placeholder="Écrit ton mail..." className="px-2 py-2 rounded-md text-bg focus:outline-none" />
          <div className="flex items-center justify-center px-12 py-2 mb-16 bg-white rounded-md cursor-pointer">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33 3L16.5 19.5" stroke="#7A1AF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M33 3L22.5 33L16.5 19.5L3 13.5L33 3Z" stroke="#7A1AF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </Section>
      </main>
      <Footer fixed={false} />
    </>
  );
}
