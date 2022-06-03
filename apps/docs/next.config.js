const withTM = require("next-transpile-modules")(["ui", 'next-intl']);

module.exports = withTM({
  reactStrictMode: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  }
});
