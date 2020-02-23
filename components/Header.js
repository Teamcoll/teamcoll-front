import styled from "styled-components";
import { theme } from "Component/style/theme";

export const TopHeader = styled.header`
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  h2 {
    margin: 6px 0px;
    font-size: 2em;
    margin-left: 10px;
  }
`;
