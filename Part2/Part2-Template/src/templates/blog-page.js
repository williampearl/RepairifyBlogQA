import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";
import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Spacer from "../components/core/spacer";
import ContentStyle from "../components/core/blog-post/content-style";

export default function BlogPage({ data, children }) {
  // Get the frontmatter (metadata) of the blog post
  const { title, date, image } = data.mdx.frontmatter;

  return (
    <>
      <title>{title}</title>
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        alt={title}
        className="blog-image"
      />
      <Spacer size={"3rem"} />
      <h1 className="blog-title">{title}</h1>
      <h3 className="blog-date">{date}</h3>
      <Spacer size={"3rem"} />
      <ContentStyle>
        <div className="blog-body">
          <MDXProvider>{children}</MDXProvider>
        </div>
      </ContentStyle>
      <Spacer size={"3rem"} />
      <p>
        <a href="/">Return to the homepage</a>
      </p>
    </>
  );
}

// Query only the current blog post
export const query = graphql`
  query BlogPage($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
