import { findNewRoute, findCountryIdInPathname, capitalize } from "./helpers";

describe("Test helpers functions", () => {
  describe("findNewRoute()", () => {
    it("should get find new route based on current active country", () => {
      expect(findNewRoute("/country/us", "gb")).toBe("/country/gb");
    });
  });

  describe("findCountryIdInPathname()", () => {
    it("should extract country id from pathanme", () => {
      expect(findCountryIdInPathname("/country/gb/search")).toBe("gb");
    });
  });

  describe("capitalize()", () => {
    it("should capitalize string", () => {
      expect(capitalize("business")).toBe("Business");
    });
  });
});
