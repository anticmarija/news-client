import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { findNewRoute } from "../../utils/helpers";

import {
  MenuWrapperStyle,
  MenuItemsWrapperStyle,
  MenuCountriesWrapperStyle,
  MenuItemStyle,
  LinkStyle,
} from "./Menu.style";
import { setActiveCountry } from "../../store/actions/countries.actions";

const Menu = () => {
  const { supportedCountries, activeCountry } = useSelector(
    (state) => state.countries
  );
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const handleChangeCountry = (countryId) => {
    dispatch(setActiveCountry(countryId));
  };

  return (
    <MenuWrapperStyle>
      <MenuItemsWrapperStyle>
        <MenuItemStyle>
          <LinkStyle exact to={`/country/${activeCountry}/`}>
            Top news
          </LinkStyle>
        </MenuItemStyle>
        <MenuItemStyle>
          <LinkStyle exact to={`/country/${activeCountry}/categories`}>
            Categories
          </LinkStyle>
        </MenuItemStyle>
        <MenuItemStyle>
          <LinkStyle exact to={`/country/${activeCountry}/search`}>
            Search
          </LinkStyle>
        </MenuItemStyle>
      </MenuItemsWrapperStyle>

      <MenuCountriesWrapperStyle>
        {supportedCountries.map(({ countryId }) => (
          <MenuItemStyle key={countryId}>
            <LinkStyle
              onClick={() => handleChangeCountry(countryId)}
              active={activeCountry === countryId}
              to={findNewRoute(pathname, countryId)}
            >
              {countryId.toUpperCase() + " "}
            </LinkStyle>
          </MenuItemStyle>
        ))}
      </MenuCountriesWrapperStyle>
    </MenuWrapperStyle>
  );
};

export default Menu;
