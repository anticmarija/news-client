import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const MenuWrapperStyle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: #e7e9ec;
`;

export const MenuItemsWrapperStyle = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const MenuItemStyle = styled.div`
  height: 100%;
  background-color: ${(props) => (props.active ? "#282c34" : "transparent")};
  display: flex;
  align-items: center;
  padding: 0 12px;

  &:hover {
    background-color: ${(props) => (props.active ? "#282c34" : "#d4deee")};
  }

  a {
    text-decoration: none;
    cursor: ${(props) => (props.enabled ? "pointer" : "not-allowed")};
    color: black;
  }
`;

export const LinkStyle = styled(NavLink)`
  &.active {
    color: #ffffff;
  }
`;

export const MenuCountriesWrapperStyle = styled.div`
  height: 100%;
  margin-left: auto;
  display: flex;
  align-items: center;
`;
