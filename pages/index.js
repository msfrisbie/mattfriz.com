import Header from "@components/Header";
import Image from "next/image";
import { useEffect } from "react";
import arizona_mobile from "../public/assets/images/arizona_mobile.webp";

export default function Home() {
  useEffect(() => {
    // Remove old tracking pieces
    if (!!window.location.search) {
      window.location.href =
        window.location.origin +
        window.location.pathname +
        window.location.hash;
    } else if (window.location.href.includes("#/outbursts")) {
      window.location.href = window.location.href.replace(
        "#/outbursts",
        "pieces"
      );
    }
  });

  return (
    <div className="flex flex-col items-center gap-16">
      <Header
        title="Matt Frisbie | mattfriz.com"
        url="https://www.mattfriz.com"
        description="Software Engineer and Bestselling Author"
      ></Header>

      <div className="relative w-48 h-48 sm:w-64 sm:h-64 mt-12">
        <Image
          priority
          className="rounded-full"
          src={arizona_mobile}
          alt={"Matt Frisbie"}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="flex flex-col items-center gap-1">
        <h1 className="text-4xl">MATT FRISBIE</h1>

        <div className="text-gray-500">
          Software engineer and bestselling author
        </div>
      </div>

      <div className="flex flex-col items-stretch text-center gap-1">
        <div className="text-gray-300">POPULAR</div>
        <a
          className="!no-underline !text-gray-600 bg-gray-100 p-2 rounded-md border-none"
          href="https://mattfrisbie.substack.com/"
          target="blank"
        >
          Substack
        </a>

        <a
          className="!no-underline !text-gray-600 bg-gray-100 p-2 rounded-md border-none"
          href="/pieces/tenacity-of-tech-recruiters"
        >
          Tenacity of Tech Recruiters
        </a>

        <a
          className="!no-underline !text-gray-600 bg-gray-100 p-2 rounded-md border-none"
          href="/pieces/tech-interview-torture-chamber"
        >
          Tech Interview Torture Chamber
        </a>

        <a
          className="!no-underline !text-gray-600 bg-gray-100 p-2 rounded-md border-none"
          href="/pieces/open-home-office-raises-7m-to-bring-office-distractions-to-remote-workers-nationwide"
        >
          Open Home Office
        </a>
      </div>
    </div>
  );
}
