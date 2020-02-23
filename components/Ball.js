import styled from "styled-components";

const Circle = styled.circle`
  fill: #e48383;
`;

const Ball = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="27"
    viewBox="0 0 27 27"
  >
    <Circle cx="13.5" cy="13.5" r="13.5" />
  </svg>
);

export default Ball;
