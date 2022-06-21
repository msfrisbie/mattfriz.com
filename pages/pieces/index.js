import Header from "@components/Header";
import PieceLayout from "@components/PieceLayout";

export default function Pieces() {
  return (
    <div className="p-4">
      <Header
        title="Pieces - mattfriz.com"
        url="https://www.mattfriz.com/pieces"
        description="Pieces by Matt Frisbie"
      ></Header>

      <h1 className="text-center text-5xl mb-16">LESS SERIOUS PUBLICATIONS</h1>

      <PieceLayout></PieceLayout>
    </div>
  );
}
