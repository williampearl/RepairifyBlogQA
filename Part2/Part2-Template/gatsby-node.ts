import { createFilePath } from "gatsby-source-filesystem";
import { resolve } from "path";

export function onCreateNode({ node, actions, getNode }) {
  const { createNodeField } = actions;

  // If a file is a Markdown file, add a slug for later use
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode, basePath: `pages` });

    createNodeField({
      name: `slug`,
      node,
      // Want to add other pages to your site? Try `/blog${value}`
      // so everything is under /blog/!
      value: `${value}`,
    });
  }
}

export async function createPages({ graphql, actions }) {
  const { createPage } = actions;

  // Query all Markdown files
  const blogSlugs = await graphql(`
    query BlogSlugs {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  blogSlugs.data.allMdx.nodes.forEach((node) => {
    // Import the blog post template which we fill with Markdown data
    const postTemplate = resolve(`./src/templates/blog-page.js`);

    // Create a page for every blog post
    createPage({
      path: node.fields.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        slug: node.fields.slug,
        id: node.id,
      },
    });
  });
}
