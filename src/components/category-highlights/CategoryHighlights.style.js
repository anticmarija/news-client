import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const CategoryWrapperStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #e7e9ec;
  border-bottom: 2px solid #fff;
`;

export const CategoryLinkStyle = styled(Link)`
  text-decoration: none;
  color: #282c34;
  font-size: 24px;
  font-weight: bold;
  margin: 24px 0px 24px 12px;
  display: inline;

  a {
    display: inline;
  }
`;

export const CategoryTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  background: #e7e9ec;

  &:hover {
    text-decoration: underline;
  }
`;

export const CategoryArticlesStyle = styled.div`
  width: 100%;
  justify-content: space-between;
  border-top 2px solid #fff;

  display: ${(props) => (props.isExpanded ? "block" : "none")};
`;

export const ArrowIconStyle = styled.img`
  display: flex;
  width: 24px;
  height: auto;
  transform: ${(props) =>
    props.isExpanded ? "rotate(270deg)" : "rotate(90deg)"};
  margin-left: 12px;
  cursor: pointer;
`;
