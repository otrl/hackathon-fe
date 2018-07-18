module.exports = {
  "extends": "eslint:recommended",

  "parser": "babel-eslint",

  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },

  "globals": {
      React: true
  },

  "settings": {
     "react": {
       "version": "16.2.1"
     }
  },

  "rules": {
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-underscore-dangle": [0],

    "react/no-deprecated": 2,
    "react/jsx-boolean-value": [1, "never"],
    "react/display-name": 0,
    "react/jsx-no-undef": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/jsx-no-duplicate-props": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-multi-comp": 1,
    "react/no-unknown-property": 1,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 1,
    "react/self-closing-comp": 1,
    "react/jsx-wrap-multilines": [1, { arrow: false }],
    "react/no-direct-mutation-state": 1,
    "react/prefer-es6-class": 1,

    "no-alert": 1,
    "no-array-constructor": 1,
    "no-caller": 1,
    "no-catch-shadow": 1,
    "no-eval": 1,
    "no-extend-native": 1,
    "no-extra-bind": 1,
    "no-implied-eval": 1,
    "no-iterator": 1,
    "no-label-var": 1,
    "no-labels": 1,
    "no-lone-blocks": 1,
    "no-loop-func": 1,
    "no-multi-spaces": 1,
    "no-multi-str": 1,
    "no-native-reassign": 1,
    "no-new": 1,
    "no-new-func": 1,
    "no-new-object": 1,
    "no-new-wrappers": 1,
    "no-octal-escape": 1,
    "no-process-exit": 1,
    "no-proto": 1,
    "no-return-assign": 1,
    "no-script-url": 1,
    "no-sequences": 1,
    "no-shadow": 1,
    "no-shadow-restricted-names": 1,
    "no-spaced-func": 1,
    "no-trailing-spaces": 1,
    "no-undef-init": 1,
    "no-unused-expressions": 1,
    "no-use-before-define": 1,
    "no-with": 1,
    "camelcase": 1,
    "comma-spacing": 1,
    "consistent-return": 1,
    "curly": 1,
    "dot-notation": 1,
    "eol-last": 1,
    "eqeqeq": 1,
    "key-spacing": 1,
    "new-cap": 1,
    "new-parens": 1,
    "semi": 1,
    "semi-spacing": 1,
    "space-infix-ops": 1,
    "keyword-spacing": 1,
    "space-unary-ops": 1,
    "strict": [2, "never"],
    "yoda": 1

  },

  "plugins": [
    "react"
  ],

  "parserOptions": {
    "sourceType": "module",

    "ecmaFeatures": {
      "jsx": true
    }
  }
};
