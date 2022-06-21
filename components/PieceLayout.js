import PieceList from "./PieceList";

export default function PieceLayout({ children }) {
  return (
    <>
      <div class="flex flex-col items-center">
        <div className="p-8" style={{ maxWidth: "720px" }}>
          {children}
          <PieceList></PieceList>
        </div>
      </div>
    </>
  );
}
