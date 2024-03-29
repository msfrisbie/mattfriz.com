import Head from "next/head";

export default function Header({ title, description, url }) {
  return (
    <>
      <Head>
        <title key="title">{title}</title>

        <link key="canonical" rel="canonical" href={url} />

        <meta key="description" name="description" content={description} />

        {/* Twitter Card data */}
        <meta key="twitter_card" name="twitter:card" content="summary" />
        <meta key="twitter_site" name="twitter:site" content="@mattfriz" />
        <meta key="twitter_title" name="twitter:title" content={title} />
        <meta
          key="twitter_description"
          name="twitter:description"
          content={description}
        />
        <meta
          key="twitter_creator"
          name="twitter:creator"
          content="@mattfriz"
        />
        {/* Twitter Summary card images must be at least 120x120px */}
        <meta
          key="twitter_image"
          name="twitter:image"
          content="https://www.mattfriz.com/arizona.jpg"
        />

        {/* Open Graph data */}
        <meta key="og_title" property="og:title" content={title} />
        <meta key="og_type" property="og:type" content="article" />
        <meta key="og_url" property="og:url" content={url} />
        <meta
          key="og_image"
          property="og:image"
          content="https://www.mattfriz.com/arizona.jpg"
        />
        <meta
          key="og_description"
          property="og:description"
          content={description}
        />
        <meta
          key="og_sitename"
          property="og:site_name"
          content="mattfriz.com"
        />
      </Head>
    </>
  );
}
