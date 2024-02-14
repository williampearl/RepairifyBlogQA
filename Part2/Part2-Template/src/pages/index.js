import * as React from "react";
import { graphql } from "gatsby";
import Thumbnail from "../components/core/blog/thumbnail";
import Excerpt from "../components/core/blog/excerpt";
import BlogPreview from "../components/core/blog/blog-preview";

const IndexPage = ({ data }) => {
  return (
    <>
      <title>My Workshop Blog</title>
      <h1>My Workshop Blog</h1>
      <h3>This blog was created as a part of a workshop with Repairify</h3>
      {/* Map the blogposts to a preview and link element */}
      {data.blogposts.nodes.map((post) => (
        <BlogPreview
          id={post.fields.slug.substring(1, post.fields.slug.length - 1)}
          key={post.fields.slug}
          href={post.fields.slug}
        >
          <Thumbnail
            image={post.frontmatter.image.childImageSharp.gatsbyImageData}
            alt={post.frontmatter.title}
            className="blog-thumbnail"
          />
          <div
            style={{
              width: "100%",
            }}
          >
            <h2 className="blog-title">{post.frontmatter.title}</h2>
            <h3 className="blog-date">{post.frontmatter.date}</h3>
            <Excerpt className="blog-excerpt">{post.excerpt}</Excerpt>
          </div>
        </BlogPreview>
      ))}
    </>
  );
};

export default IndexPage;

// Query all blog posts
export const query = graphql`
  query BlogQuery {
    blogposts: allMdx {
      nodes {
        excerpt(pruneLength: 250)
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          image {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: DOMINANT_COLOR
                width: 368
                aspectRatio: 1.777
              )
            }
          }
        }
      }
    }
  }
`;
