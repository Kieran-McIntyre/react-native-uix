module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  rules: {
    "object-curly-spacing": ["error", "always"],
    quotes: [2, "double", "avoid-escape"],
    semi: [2, "always"],
    "react-hooks/exhaustive-deps": "off",
    indent: "off",
    "react/prop-types": "off",
    "react/jsx-max-props-per-line": ["error", { "maximum": 1 }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/indent": ["error", 2],
    "react/display-name": "off"
  },
};