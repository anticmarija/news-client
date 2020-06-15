const config = {
  getApiKey() {
    return process.env.REACT_APP_API_KEY;
  },
  getApiBaseUrl() {
    return process.env.REACT_APP_API_BASE_URL;
  },
  getCountries() {
    return [
      { countryId: "gb", countryName: "Great Britain" },
      { countryId: "us", countryName: "United States" },
    ];
  },
  getCategories() {
    return [
      "Business",
      "Entertainment",
      "General",
      "Health",
      "Science",
      "Sports",
      "Technology",
    ];
  },
};

export default config;
