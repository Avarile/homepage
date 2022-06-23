const envConfig = {
  development: {},
  test: {},
  production: {},
  generalSettings: {
    baseUrl: "http://localhost:3001",
  },
};

const envSwitch = (envSelector: "development" | "production" | "test") => {
  if (envSelector === "development") {
    return {
      ...envConfig.development,
      ...envConfig.generalSettings,
    };
  }
  if (envSelector === "test") {
    return {
      ...envConfig.test,
      ...envConfig.generalSettings,
    };
  }
  if (envSelector === "production") {
    return {
      ...envConfig.production,
      ...envConfig.generalSettings,
    };
  }
};

export default envSwitch(process.env.NODE_ENV);
