module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-sort-media-queries")({
      sort: "mobile-first", // default value
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
