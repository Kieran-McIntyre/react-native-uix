module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: "@react-native-community",
  plugins: ["@typescript-eslint"],
  rules: {
    quotes: [2, "double", "avoid-escape"],
    "nonblock-statement-body-position": [0, "any"],
    "react-hooks/exhaustive-deps": "off",
    semi: [2, "always"],
  },
};
