import Image from "next/image";

export default function PublicationItem({ publicationData }) {
  return (
    <div className="flex flex-col gap-16">
      <a
        className="book-container"
        href={publicationData.url}
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className={`book ${publicationData.bookClass}`}>
          <Image
            src={publicationData.image}
            alt={publicationData.title + " - Matt Frisbie"}
          />
        </div>
      </a>

      <div className="text-2xl text-center">{publicationData.title}</div>
    </div>
  );
}
