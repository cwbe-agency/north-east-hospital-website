import React from "react";
import { Helmet } from "react-helmet-async";
import contact from "@/data/contact";

const SITE_URL = "https://nemhospital.in"; // placeholder canonical base
const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1587351021821-f871837248c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MHx8fHwxNzgxMzI1MzE2fDA&ixlib=rb-4.1.0&q=85";

const Seo = ({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  structuredData,
}) => {
  const fullTitle = title
    ? `${title} · ${contact.hospital.name}`
    : `${contact.hospital.name} · Multispeciality Hospital in Siliguri`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={contact.hospital.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="geo.region" content="IN-WB" />
      <meta name="geo.placename" content="Siliguri" />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;
