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
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}