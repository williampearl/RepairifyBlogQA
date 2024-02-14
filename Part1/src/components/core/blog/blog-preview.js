import styled from "styled-components";

// Display blog posts on the blog page
const BlogPreview = styled.a`
  /* Add space on top and bottom, have image and text displayed side-by-side */
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  /* Basic customization using CSS */
  background-color: var(--color-darkish);
  padding: 1.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-darkest);
  }

  /* Scale with smaller screens */
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default BlogPreview;
