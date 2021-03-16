import styled from "styled-components";

export const Flex = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  & > * {
    margin: 10px;
  }
`;
