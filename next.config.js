const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  pageExtensions: ['jsx', 'js'],

  cssModules: true,
  cssLoaderOptions: {
    sourceMap: true,
    importLoaders: 1,
    localIdentName: '[local]__[hash:base64:5]',
    camelCase: true,
  },

  webpack: (config) => {
    // Unshift polyfills in main entrypoint.
    // const originalEntry = config.entry;
    // config.entry = async () => {
    //   const entries = await originalEntry();
    //   if (entries['main.js']) {
    //     entries['main.js'].unshift('./utils/polyfills.js');
    //   }
    //   return entries;
    // };

    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'frontmatter-markdown-loader',
      }
    );

    return config;
  },
});
