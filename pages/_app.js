import Boilerplate from "@components/Boilerplate";
import "@styles/globals.scss";
import Head from "next/head";

function Application({ Component, pageProps }) {
  return (
    <Boilerplate>
      <Component {...pageProps} />
    </Boilerplate>
  );
}

export default Application;
