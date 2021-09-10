import Head from "next/head";
import Link from "next/link";

export default function Event({ id, events_list }) {
  const event = events_list.filter((value) => {
    if (parseInt(id) === value.id) {
      return value;
    }
  })[0];
  // console.log(event);
  const completed = new Date(event.date) - new Date() < 0;
  return (
    <>
      <Head>
        <title>.events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center flex-grow overflow-y-scroll font-body">
        <div className="flex flex-col items-center w-full max-w-5xl">
          <div className="flex w-full mt-6">
            <Link href={{ pathname: "/", query: { tab: "events" } }}>
              <a className="fixed w-6 h-6">
                <svg width="35" height="35" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.9326 18.2446L9.93262 12.2446L15.9326 6.2446" stroke="#7A1AF3" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Link>
            <p className="mt-1 ml-10 text-2xl uppercase md:mt-0 md:text-5xl font-logo">{event.title}</p>
          </div>
          <div className="flex w-full">
            <p className={`${completed ? "line-through" : ""} ml-10 text-lg md:text-xl font-body`}>{event.date.split("-").join("/")}</p>
          </div>
          <div id="description" dangerouslySetInnerHTML={{ __html: event.description }} className="px-8 mt-6 max-w-7xl"></div>
        </div>
      </main>
    </>
  );
}
