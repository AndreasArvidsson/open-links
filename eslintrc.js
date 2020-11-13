module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "env": {
        "browser": true, //window, console etc..
        "es6": true //Promise
    },
    "rules": {
        "no-console": "off"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};