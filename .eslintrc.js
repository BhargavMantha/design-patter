module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "airbnb/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier"
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "project": "./tsconfig.json"
  },
  "plugins": ["prettier"],
  "rules": {
    "no-useless-constructor": 0,
    "no-use-before-define": 0,
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "import/prefer-default-export": "off",
    "prettier/prettier": ["error"],
    "semi": ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    "camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-inferrable-types": [
      "warn",
      {
        "ignoreParameters": true
      }
    ],
    "no-underscore-dangle": "off",
    "no-shadow": "off",
    "no-new": 0,
    "@typescript-eslint/no-shadow": ["error"],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "quotes": [2, "single", { "avoidEscape": true }],
    "class-methods-use-this": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  }
};
