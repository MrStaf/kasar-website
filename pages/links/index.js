import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "../../img/kasar.png";

export default function Events() {
  return (
    <div id="links-main" className="flex flex-col items-center h-full pt-8">
      <Head>
        <title>.liens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center h-full text-white">
        <Image src={logo} width="200px" height="200px" alt="logo kasar"/>
        <div className="text-5xl font-bold title font-logo">
          KASAR <span className="font-logo-light text-primary">LINKS</span>
        </div>
        <div className="text-lg font-body">Association évènementielle d&apos;IA.</div>
        <section className="font-body">
          <a href="https://github.com/kasar-ia" target="_blank" rel="noreferrer">
            <div className="svg">
              <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 22V18.13C15.0375 17.6532 14.9731 17.1738 14.811 16.7238C14.6489 16.2738 14.3929 15.8634 14.06 15.52C17.2 15.17 20.5 13.98 20.5 8.52C20.4997 7.12383 19.9627 5.7812 19 4.77C19.4559 3.54851 19.4236 2.19835 18.91 1C18.91 1 17.73 0.650001 15 2.48C12.708 1.85882 10.292 1.85882 8 2.48C5.27 0.650001 4.09 1 4.09 1C3.57638 2.19835 3.54414 3.54851 4 4.77C3.03013 5.7887 2.49252 7.14346 2.5 8.55C2.5 13.97 5.8 15.16 8.94 15.55C8.611 15.89 8.35726 16.2954 8.19531 16.7399C8.03335 17.1844 7.96681 17.6581 8 18.13V22M8 19C3 20.5 3 16.5 1 16L8 19Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>github</div>
          </a>
          <Link href="/?tab=events">
            <a>
              <div className="svg">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 1V5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 1V5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1 9H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>events</div>
            </a>
          </Link>
          <Link href="/">
            <a>
              <div className="svg">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.24 6.76L13.12 13.12L6.76 15.24L8.88 8.88L15.24 6.76Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>web-site</div>
            </a>
          </Link>
          <a href="https://www.twitch.tv/kasarlab" target="_blank" rel="noreferrer">
            <div className="svg">
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 10V6M19 1H1V17H6V21L10 17H15L19 13V1ZM9 10V6V10Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>twitch</div>
          </a>
          <Link href="/?tab=podcast">
            <a>
              <div className="svg">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 16V10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10V16"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H16C15.4696 19 14.9609 18.7893 14.5858 18.4142C14.2107 18.0391 14 17.5304 14 17V14C14 13.4696 14.2107 12.9609 14.5858 12.5858C14.9609 12.2107 15.4696 12 16 12H19V17ZM1 17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H4C4.53043 19 5.03914 18.7893 5.41421 18.4142C5.78929 18.0391 6 17.5304 6 17V14C6 13.4696 5.78929 12.9609 5.41421 12.5858C5.03914 12.2107 4.53043 12 4 12H1V17Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>podcast</div>
            </a>
          </Link>
          <a href="https://www.instagram.com/kasar.ai/" target="_blank" rel="noreferrer">
            <div className="svg">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M15 10.37C15.1234 11.2022 14.9813 12.0522 14.5938 12.799C14.2063 13.5458 13.5931 14.1514 12.8416 14.5297C12.0901 14.9079 11.2384 15.0396 10.4078 14.9059C9.57712 14.7723 8.80976 14.3801 8.21484 13.7852C7.61991 13.1902 7.22773 12.4229 7.09406 11.5922C6.9604 10.7615 7.09206 9.90989 7.47032 9.15837C7.84858 8.40685 8.45418 7.79374 9.20098 7.40624C9.94778 7.01874 10.7978 6.87658 11.63 7C12.4789 7.12588 13.2648 7.52146 13.8717 8.1283C14.4785 8.73515 14.8741 9.52107 15 10.37Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M16.5 5.5H16.51" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>instagram</div>
          </a>
          <a href="https://www.facebook.com/kasar.ai.eceparis" target="_blank" rel="noreferrer">
            <div className="svg">
              <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>facebook</div>
          </a>
        </section>
      </main>
    </div>
  );
}
