import Head from 'next/head';

export default function SEO({
  description = 'Best Freelancer In UAE, Dubai and Middle East Region. React, Nextjs, Javascript, React-Native Developer in Dubai, UAE, Middle East Region. Proficient in all types of programming languages and frameworks. Best developer in UAE, Dubai and Middle East Region.',
  author = 'Bishal Khatri',
  meta,
  title = 'Bishal Khatri - Freelance Developer ',
  locale = 'en',
}) {
  const metaData = [
    {
      name: `og:locale`,
      content: locale,
    },
    {
      name: `og:type`,
      content: `website`,
    },
    {
      name: `og:title`,
      content: title,
    },
    {
      name: `og:description`,
      content: description,
    },
    {
      name: `og:url`,
      content: `https://www.bishalkhatri.com/`,
    },
    {
      name: `og:site_name`,
      content: `BishalKhatri`,
    },
  ].concat(meta);

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.svg" />
      <meta name="description" content={description} />
      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />
      <link rel="canonical" href="https://www.bishalkhatri.com/" />
      {metaData.map(({ name, content }, i) => (
        <meta key={i} property={name} content={content} />
      ))}
      <meta name="twitter:card" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description}></meta>
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
