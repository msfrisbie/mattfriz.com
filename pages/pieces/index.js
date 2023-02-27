import Header from "@components/Header";
import PieceLayout from "@components/PieceLayout";
import Image from "next/image";
import google_lacroix from "../../public/assets/images/google_lacroix.jpeg";

export default function Pieces() {
  return (
    <div className="p-4 flex flex-col items-center">
      <Header
        title="Pieces - mattfriz.com"
        url="https://www.mattfriz.com/pieces"
        description="Pieces by Matt Frisbie"
      ></Header>

      <h1 className="text-center text-5xl mb-4">LESS SERIOUS PUBLICATIONS</h1>

      <PieceLayout></PieceLayout>

      <div style={{ maxWidth: "720px" }} className="p-8">
        <Image
          src={google_lacroix}
          alt={"Matt Frisbie"}
          style={{ overflow: "inherit" }}
          className="rounded-lg"
        ></Image>
        <div className="italic text-center text-gray-300">
          Author Matt Frisbie (far right) engaged in his creative process
        </div>
      </div>
    </div>
  );
}
