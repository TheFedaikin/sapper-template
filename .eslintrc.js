module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["svelte3", "@typescript-eslint", "prettier"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
    {
      files: ["*.ts", "*.js"],
      rules: {
        "prettier/prettier": 2,
      },
    },
  ],
  rules: {
    "prettier/prettier": 0,
  },
  settings: {
    "svelte3/typescript": require("typescript"),
  },
}
