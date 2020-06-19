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
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();

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
            {t("menu.topNews")}
          </LinkStyle>
        </MenuItemStyle>
        <MenuItemStyle
          enabled
          active={pathname === `/country/${activeCountry}/categories`}
        >
          <LinkStyle exact to={`/country/${activeCountry}/categories`}>
            {t("menu.categories")}
          </LinkStyle>
        </MenuItemStyle>
        <MenuItemStyle
          enabled
          active={pathname === `/country/${activeCountry}/search`}
        >
          <LinkStyle exact to={`/country/${activeCountry}/search`}>
            {t("menu.search")}
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
