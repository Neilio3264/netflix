const path = require("path");
const CracoEnvPlugin = require("craco-plugin-env");

module.exports = {
  plugins: [
    {
      plugin: CracoEnvPlugin,
      options: {
        variables: {},
      },
    },
  ],
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@services": path.resolve(__dirname, "src/services/"),
      "@store": path.resolve(__dirname, "src/store/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@views": path.resolve(__dirname, "src/views/"),
    },
  },
};
