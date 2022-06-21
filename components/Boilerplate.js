import Script from "next/script";
import CustomNavbar from "./CustomNavbar";
import Header from "./Header";

export default function Boilerplate({ children }) {
  return (
    <>
      <Header
        title="Matt Frisbie | Software Engineer, Bestselling Author"
        url="https://www.mattfriz.com"
        description="Matt Frisbie | Software Engineer, Bestselling Author"
      ></Header>

      <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-0ETS0H9HMM"}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0ETS0H9HMM', {
          page_path: window.location.pathname,
          });
      `}
      </Script>

      <CustomNavbar />

      {children}

      <footer className="flex flex-col items-center justify-center p-8 text-sm text-gray-300">
        Copyright Matt Frisbie 2022
      </footer>
    </>
  );
}
