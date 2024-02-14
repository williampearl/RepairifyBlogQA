import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

// Thumbnail displayed next to blog post information on the blog page
const Thumbnail = styled(GatsbyImage)`
  /* Set a fixed size, margin for spacing */
  margin-right: 2rem;
  width: 25vw;
  max-width: 368px;
  height: 100%;

  /* Basic customization using CSS */
  border-radius: 0.5rem;

  /* Scale with smaller screens */
  @media screen and (max-width: 768px) {
    margin-right: 0;
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
  }
`;

export default Thumbnail;
