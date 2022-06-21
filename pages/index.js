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
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 mt-12">
        <Image
          priority
          className="rounded-full"
          src={arizona_mobile}
          alt={"Matt Frisbie"}
          layout="fill"
          objectFit="cover"
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
          className="no-underline text-gray-600 bg-gray-100 p-2 rounded-md border-1"
          href="https://buildingbrowserextensions.com"
          target="blank"
        >
          Building Browser Extensions
        </a>

        <a
          className="no-underline text-gray-600 bg-gray-100 p-2 rounded-md border-1"
          href="/pieces/tenacity-of-tech-recruiters"
        >
          Tenacity of Tech Recruiters
        </a>

        <a
          className="no-underline text-gray-600 bg-gray-100 p-2 rounded-md border-1"
          href="/pieces/tech-interview-torture-chamber"
        >
          Tech Interview Torture Chamber
        </a>
      </div>
    </div>
  );
}
