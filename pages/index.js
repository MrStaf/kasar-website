// librairies
import Parser from "rss-parser";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// Functions
import { getData } from "../functions";

// Components
import { Header } from "./../components/Header/";
import { Footer } from "./../components/Footer/";

// Tabs
import { Home } from "../tabs/home";
import { Events } from "../tabs/events";
import { Event } from "../tabs/events";
import { Podcast } from "../tabs/podcast";
import { NousRejoindre } from "../tabs/nous_rejoindre";
import { Association } from "../tabs/association";

// Consts
const API_URL = "https://content.benoit.fage.fr/items/";

export default function App({ events_list, podcasts }) {
  // console.log(events_list);
  // console.log(podcasts);

  const router = useRouter();
  const tab = router.query.tab;
  const events = router.query.id;

  const isTabHome = tab === "" || tab == null;
  const isTabEvents = tab === "events";
  const isTabEvent = events !== undefined;
  const isTabPodcast = tab === "podcast";
  const isTabNousRejoindre = tab === "nous_rejoindre";
  const isTabAssociation = tab === "association";
  const is404 = !(isTabHome || isTabEvents || isTabPodcast || isTabNousRejoindre || isTabAssociation);
  useEffect(() => {
    if (is404) {
      router.push("404");
    }
  }, []);

  const [active, setActive] = useState();

  return (
    <>
      <Header />
      {isTabHome && <Home />}
      {!isTabEvent && isTabEvents && <Events events_list={events_list} />}
      {isTabEvent && isTabEvents && <Event id={events} events_list={events_list} />}
      {isTabPodcast && <Podcast podcasts={podcasts} active={active} setActive={setActive} />}
      {isTabNousRejoindre && <NousRejoindre />}
      {isTabAssociation && <Association />}
      <Footer podcasts={podcasts} active={active} setActive={setActive} />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const parser = new Parser({
    customFields: {
      item: ["season", "episode"],
    },
  });
  const podcasts = await parser.parseURL("http://136.243.117.30:8000/").then((data) => {
    return data === undefined ? null : data;
  });
  const events = await getData(API_URL + "kasar_events?sort=date")
    .then((data) => {
      // console.log(data.data);
      return data.data;
    })
    .catch((err) => {
      console.error(err, "events_error");
    });
  return {
    props: {
      podcasts: podcasts,
      events_list: events,
    },
  };
};
