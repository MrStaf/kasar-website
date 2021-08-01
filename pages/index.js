// librairies
import Parser from "rss-parser";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// Components
import { Header } from "./../components/Header/index";
import { Footer } from "./../components/Footer/index";
// Tabs
import { Home } from "../tabs/home";
import { Event } from "../tabs/events";
import { Podcast } from "../tabs/podcast";
import { NousRejoindre } from "../tabs/nous_rejoindre";
import { Association } from "../tabs/association";

export default function App(podcasts) {
  const router = useRouter();
  const tab = router.query.tab;

  const isTabHome = tab === "" || tab == null;
  const isTabEvents = tab === "events";
  const isTabPodcast = tab === "podcast";
  const isTabNousRejoindre = tab === "nous_rejoindre";
  const isTabAssociation = tab === "association";
  const is404 = isTabHome || isTabEvents || isTabPodcast || isTabNousRejoindre || isTabAssociation;
  useEffect(() => {
    if (!is404) {
      router.push("404");
    }
  }, []);

  const [active, setActive] = useState();
  return (
    <>
      <Header />
      {isTabHome && <Home />}
      {isTabEvents && <Event />}
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
  return {
    props: {
      podcasts: { ...podcasts },
    },
  };
};
