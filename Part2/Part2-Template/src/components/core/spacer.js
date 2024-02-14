import styled from "styled-components";

// Spacer to add space between elements
const Spacer = styled.div`
  /* Take an input of size and return a spacer of that size */
  height: ${(props) => props.size};
`;

export default Spacer;
