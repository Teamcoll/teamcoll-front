import styled from "styled-components";

export const Grid = styled.div`
  /* Triple devide */
  display: flex;
  flex-direction: row;
  section {
    flex-basis: 33.3%;

    &:first-of-type {
      margin-left: 0px;
      margin-right: 50px;
    }

    &:last-child {
      margin-left: 50px;
      margin-right: 0px;
    }
  }
`;
