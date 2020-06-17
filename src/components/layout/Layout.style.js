import styled from "styled-components/macro";

export const LayoutStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 32px;

  @media only screen and (min-width: 768px) {
    padding: 0 64px;
  }
`;
