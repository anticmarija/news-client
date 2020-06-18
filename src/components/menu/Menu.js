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
  const {
    supportedCountries,
    activeCountry,
    isChangingCountriesEnabled,
  } = useSelector((state) => state.countries);
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const handleChangeCountry = (countryId) => {
    if (isChangingCountriesEnabled) {
      dispatch(setActiveCountry(countryId));
    }
  };

  return (
    <MenuWrapperStyle>
      <MenuItemsWrapperStyle>
        <MenuItemStyle
          enabled
          active={pathname === `/country/${activeCountry}/`}
        >
          <LinkStyle exact to={`/country/${activeCountry}/`}>
            Top news
          </LinkStyle>
        </MenuItemStyle>
        <MenuItemStyle
          enabled
          active={pathname === `/country/${activeCountry}/categories`}
        >
          <LinkStyle exact to={`/country/${activeCountry}/categories`}>
            Categories
          </LinkStyle>
        </MenuItemStyle>
        <MenuItemStyle
          enabled
          active={pathname === `/country/${activeCountry}/search`}
        >
          <LinkStyle exact to={`/country/${activeCountry}/search`}>
            Search
          </LinkStyle>
        </MenuItemStyle>
      </MenuItemsWrapperStyle>

      <MenuCountriesWrapperStyle>
        {supportedCountries.map(({ countryId }) => (
          <MenuItemStyle
            enabled={isChangingCountriesEnabled}
            active={activeCountry === countryId}
            key={countryId}
          >
            <LinkStyle
              data-testid="country-link"
              onClick={() => handleChangeCountry(countryId)}
              active={activeCountry === countryId ? "active" : ""}
              to={
                isChangingCountriesEnabled
                  ? findNewRoute(pathname, countryId)
                  : "#"
              }
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
