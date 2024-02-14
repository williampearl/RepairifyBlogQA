import styled from "styled-components";

// Styles for different types of content in the blog post
// WARNING: I highly recommend leaving this as-is unless you want to customize how your blog posts look specifically
export const ContentStyle = styled.div`
  h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 1.5em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    line-height: 1.2em;
  }

  h1:first-child {
    margin-block-start: 0px;
  }

  h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 1.25em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    line-height: 1.2em;
  }

  h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 0.5em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    line-height: 1.2em;
  }

  p {
    display: block;
    margin-block-start: 0.75em;
    margin-block-end: 0.75em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .blog-body ul,
  .blog-body ol {
    color: var(--color-light);
    margin-left: 1.5rem;
    margin-block-start: 0.75em;
    margin-block-end: 0.75em;
    line-height: 1.5em;
  }

  .blog-body ul ul,
  .blog-body ol ol,
  .blog-body ul ol,
  .blog-body ol ul {
    margin-block-start: 0.5em;
    margin-block-end: 0;
  }

  .blog-body li:not(:last-child) {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  code {
    color: var(--color-lightest);
    font-family: monospace;
    background-color: var(--color-darkest);
    padding: 0.25rem;
    border-radius: 4px;
  }
`;

export default ContentStyle;
