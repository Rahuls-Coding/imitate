import Head from "next/head";

export default function Meta({ title, siteTitle }) {
  const description = "An AI-powered tool to help you write better";
  const author = "Rahul";
  const themeColor = "#ffffff";
  const image =
    "https://og-image.vercel.app/**Next.js**%20Starter%20%3Cbr%2F%3E%20%40exu3.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg";
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>
        {title} {siteTitle}
      </title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta property="og:url" content="yourdomain.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
