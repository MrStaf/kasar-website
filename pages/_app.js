// Imports
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Router } from "next/dist/client/router";
import NProgress from "nprogress";

// Styles
import "../styles/globals.css";
import "../styles/card.css";
import "../styles/links.css";
import "../styles/event.css";
import "../styles/nprogress.css";

// React Alert options
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

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
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Component {...pageProps} />
    </AlertProvider>
  );
}

export default Kasar;
