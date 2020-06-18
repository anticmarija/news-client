import countriesReducer from "../countries.reducer";
import {
  setCountries,
  setActiveCountry,
  enableChangingCountries,
  disableChangingCountries,
} from "../../actions/countries.actions";
import { initialState } from "../countries.reducer";

describe("countriesReducer test", () => {
  it("should return right state", () => {
    expect(
      countriesReducer(
        {},
        setCountries([{ countryId: "gb", countryName: "Great Britain" }])
      )
    ).toEqual({
      supportedCountries: [{ countryId: "gb", countryName: "Great Britain" }],
    });
  });

  it("should return right state", () => {
    expect(countriesReducer({}, enableChangingCountries())).toEqual({
      isChangingCountriesEnabled: true,
    });
  });

  it("should return right state", () => {
    expect(countriesReducer({}, disableChangingCountries())).toEqual({
      isChangingCountriesEnabled: false,
    });
  });

  it("should return right state", () => {
    expect(countriesReducer({}, setActiveCountry("gb"))).toEqual({
      activeCountry: "gb",
    });
  });

  it("should return initial state", () => {
    expect(countriesReducer(undefined, undefined)).toEqual(initialState);
  });

  it("should return given state", () => {
    expect(
      countriesReducer(
        {},
        {
          type: "SOME_UNKNOWN_ACTION",
        }
      )
    ).toEqual({});
  });
});
