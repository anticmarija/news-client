import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuWrapperStyle = styled.div`
  width: 100%;
  border-bottom: 1px solid grey;
  height: 50px;
  display: flex;
`;

export const MenuItemsWrapperStyle = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const MenuItemStyle = styled.div`
  height: 100%;
  background-color: darkgrey;
  display: flex;
  align-items: center;
  padding: 0 12px;

  a {
    text-decoration: none;
    cursor: pointer;
    color: black;
  }
`;

export const LinkStyle = styled(NavLink)`
  &.active {
    color: red;
  }
`;

export const MenuCountriesWrapperStyle = styled.div`
  height: 100%;
  margin-left: auto;
  display: flex;
  align-items: center;
`;
