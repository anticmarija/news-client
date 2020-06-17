import styled from "styled-components/macro";

export const SearchWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SearchInputStyle = styled.input`
  padding: 10px;
  width: 400px;
  height: 50px;
  background-color: #e7e9ec;
  border: none;
  margin-bottom: 32px;
`;

export const SearchingStatusStyle = styled.div`
  height: 20px;
  color: ${(props) => (props.show ? "#282c34" : "#ffffff")};
  margin-bottom: 20px;
`;
