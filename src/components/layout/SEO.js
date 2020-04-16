import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

function SEO({
  description,
  lang = 'en',
  meta = [],
  keywords = '',
  title
}) {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          keywords
        }
      }
    }
  `);
  const metaDescription = description || site.siteMetadata.description;
  const metaKeywords = [
    ...keywords.split(', '),
    ...site.siteMetadata.keywords.split(', ')
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang,
        class: 'h-full'
      }}
      bodyAttributes={{
        class: 'h-full'
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(
          metaKeywords.length > 0
            ? {
                name: `keywords`,
                content: metaKeywords.join(`, `)
              }
            : []
        )
        .concat(meta)}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  );
}

export default SEO;
