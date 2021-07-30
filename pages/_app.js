import "../styles/globals.css";
import "../styles/card.css";
import "../styles/links.css";
import { Router } from "next/dist/client/router";
import NProgress from "nprogress";
import "../styles/nprogress.css";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  NProgress.remove();
});

function Kasar({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default Kasar;
