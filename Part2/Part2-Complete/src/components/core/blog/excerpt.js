import styled from "styled-components";

// Styling for the excerpt of a blog post displayed on the blog page
const Excerpt = styled.p`
  /* Stop text from going past two lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export default Excerpt;
