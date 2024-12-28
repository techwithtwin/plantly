module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier", "react-native"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto", trailingComma: "es5" }],
    "react-native/no-unused-styles": "error",
  },
};
