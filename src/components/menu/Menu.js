import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { findNewRoute } from "../../utils/helpers";

const Menu = () => {
  const { supportedCountries, activeCountry } = useSelector(
    (state) => state.countries
  );
  const { pathname } = useLocation();

  return (
    <div>
      <Link to={`/country/${activeCountry}/`}>Top news </Link>
      <Link to={`/country/${activeCountry}/categories`}> Categories</Link>
      <Link to={`/country/${activeCountry}/search`}> Search </Link>
      {supportedCountries.map((country) => (
        <Link key={country} to={findNewRoute(pathname, country)}>
          {country.toUpperCase() + " "}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
