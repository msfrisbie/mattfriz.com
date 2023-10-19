import Header from "@components/Header";

export default function Media() {
  return (
    <div className="p-4">
      <Header
        title="Media - mattfriz.com"
        url="https://www.mattfriz.com/media"
        description="Media by Matt Frisbie"
      ></Header>

      <h1 className="text-center text-5xl mb-16">MEDIA</h1>

      <div className="flex flex-col items-center">
        <div
          className="px-8 flex flex-col items-stretch gap-16"
          style={{ maxWidth: "720px" }}
        >
          <div className="flex flex-col gap-4">
            <a
              href="https://www.youtube.com/watch?v=uxlGvnPPqzo"
              target="_blank"
              className="text-2xl"
            >
              Cannabinoid Connect #387: Matt Frisbie of Track &amp;Trace Tools
              Tackles Metrc's Tracking Woes with Open-Source Solution
            </a>

            <div>
              Matt Frisbie is the founder of Track & Trace Tools, the most
              popular open source platform in the cannabis industry. Trusted by
              over 1,000 companies, Track &amp; Trace Tools is a free Chrome
              extension that uniquely integrates with Metrc. It allows cannabis
              companies to easily submit Metrc reports, gain full access to
              their locked-down Metrc data, and wield an unrestricted Metrc API.
            </div>

            <iframe
              height="315"
              src="https://www.youtube.com/embed/uxlGvnPPqzo"
              title="387: Matt Frisbie of Track &amp; Trace Tools Tackles Metrc's Tracking Woes with Open-Source Solution"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://www.youtube.com/watch?v=qdkdpEIOpL8"
              target="_blank"
              className="text-2xl"
            >
              Chillinois Podcast #331 - What you might expect from the Illinois
              switch from BioTrack to Metrc
            </a>

            <div>
              In this episode, I speak to a guest about what the cannabis
              consumers and cannabis business owners might be able to expect
              from the switch from Biotrack to Metrc.
            </div>

            <iframe
              height="315"
              src="https://www.youtube.com/embed/qdkdpEIOpL8"
              title="Chillinois Podcast #331 - What you might expect from the Illinois switch from BioTrack to Metrc"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://www.youtube.com/watch?v=cIGESSm39n4"
              target="_blank"
              className="text-2xl"
            >
              HOW Browser Extensions Steal Your Data | NBTV
            </a>

            <div>
              Matt Frisbie joins Naomi Brockwell on NBTV to discuss building the
              world's most dangerous browser extension.
            </div>

            <iframe
              height="315"
              src="https://www.youtube.com/embed/cIGESSm39n4"
              title="HOW Browser Extensions Steal Your Data | NBTV"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://www.youtube.com/watch?v=FwOmtBo8sBU"
              target="_blank"
              className="text-2xl"
            >
              Matt Frisbie, Founder of Track &amp; Trace Tools | Cannabis Talk
              101
            </a>

            <div>
              Matt Frisbie joins Joe and Blue on Cannabis Talk 101 to discuss
              Metrc and the future of the cannabis industry.
            </div>

            <iframe
              height="315"
              src="https://www.youtube.com/embed/FwOmtBo8sBU"
              title="Matt Frisbie, Founder &amp; CEO of Track &amp; Trace Tools™! | Cannabis Talk 101"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://www.se-radio.net/2023/02/episode-552-matt-frisbie-on-browser-extensions/"
              target="_blank"
              className="text-2xl"
            >
              Software Engineering Radio - Matt Frisbie on Browser Extensions
            </a>

            <div>
              Matt Frisbie, author of Building Browser Extensions, speaks with
              host Kanchan Shringi about browser extensions, including key areas
              where they’ve been successful. Based on Matt’s experience as a
              developer working for Google, Doordash, and a startup he founded,
              they examine tools for building extensions, as well as APIs they
              have access to. The conversation presents detailed issues such as
              cross-browser compatibilities to keep in mind when developing
              extensions and mechanisms in the browser to prevent security
              vulnerabilities, and finally examines how emerging platforms can
              help developers take advantage of exciting new possibilities with
              web extensions.
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://www.se-radio.net/2023/02/episode-552-matt-frisbie-on-browser-extensions/"
                target="_blank"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded no-underline"
              >
                LISTEN NOW
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://www.youtube.com/watch?v=-kRdXMV3OrI"
              target="_blank"
              className="text-2xl"
            >
              Data Visualization at Scale in Angular.js
            </a>

            <div>
              Matt Frisbie discusses angular.js + d3.js to create performant
              data visualizations.
            </div>

            <iframe
              height="315"
              src="https://www.youtube.com/embed/-kRdXMV3OrI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
