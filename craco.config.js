module.exports = {
  reactScriptsVersion: "react-scripts",
  eslint: {
    enable: false,
  },
  "eslintConfig": {
    "env": {
      "browser": true,
      "es6": true,
      "jest": true
    },
    "parser": "babel-eslint",
    "settings": {
      "import/resolver": {
        "node": {
          "paths": [
            "src"
          ]
        }
      }
    },
    "extends": [
      "plugin:react/recommended",
      "airbnb",
      "airbnb/hooks",
      "prettier",
      "prettier/react",
      "plugin:prettier/recommended"
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "prettier"
    ],
    "rules": {
      "prettier/prettier": "error",
    }
  },
  style: {
    css: {
      loaderOptions: () => {
        return {
          url: false,
        };
      },
    },
  },
};