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
  getSliderSettings() {
    return {
      infinite: false,
      speed: 500,
      slidesToScroll: 1,
      slidesToShow: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  },
};

export default config;
