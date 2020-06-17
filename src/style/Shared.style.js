import styled from "styled-components/macro";

export const MainHeaderStyle = styled.h1`
  color: #282c34;
`;

export const NewsWrapperStyle = styled.div`
  display: grid;
  row-gap: 32px;
  width: 100%;
  grid-template-columns: 100%;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 45% 45%;
    column-gap: 10%;
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 30% 30% 30%;
    column-gap: 5%;
  }
`;
