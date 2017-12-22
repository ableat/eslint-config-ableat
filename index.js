module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "array-bracket-spacing": [
            "error"
        ],
        "arrow-parens": [
            "error",
            "as-needed",
            {
                "requireForBlockBody": true
            }
        ],
        "arrow-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "brace-style": [
            "error",
            "stroustrup"
        ],
        "camelcase": [
            "error",
            {
                "properties": "never"
            }
        ],
        "curly": [
            "error",
            "multi-line"
        ],
        "default-case": [
            "error"
        ],
        "dot-notation": [
            "error"
        ],
        "eol-last": [
            "error",
            "always"
        ],
        "eqeqeq": [
            "error"
        ],
        "for-direction": [
            "error"
        ],
        "id-length": [
            "error"
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "keyword-spacing": [
            "error"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "new-cap": [
            "error"
        ],
        "newline-per-chained-call": [
            "error"
        ],
        "no-array-constructor": [
            "error"
        ],
        "no-confusing-arrow": [
            "error"
        ],
        "no-console": [
            "off"
        ],
        "no-else-return": [
            "error"
        ],
        "no-empty-function": [
            "error"
        ],
        "no-eq-null": [
            "error"
        ],
        "no-extra-parens": [
            "error"
        ],
        "no-fallthrough": [
            "error"
        ],
        "no-multi-spaces": [
            "error"
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1
            }
        ],
        "no-new-func": [
            "error"
        ],
        "no-new-object": [
            "error"
        ],
        "no-param-reassign": [
            "error"
        ],
        "no-useless-constructor": [
            "error"
        ],
        "no-dupe-class-members": [
            "error"
        ],
        "no-duplicate-imports": [
            "error"
        ],
        "no-useless-escape": [
            "error"
        ],
        "no-useless-return": [
            "error"
        ],
        "no-var": [
            "warn"
        ],
        "no-whitespace-before-property": [
            "error"
        ],
        "nonblock-statement-body-position": [
            "error",
            "beside"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "object-shorthand": [
            "error"
        ],
        "padded-blocks": [
            "error",
            "never"
        ],
        "prefer-arrow-callback": [
            "error"
        ],
        "prefer-const": [
            "error"
        ],
        "prefer-template": [
            "error"
        ],
        "quote-props": [
            "error",
            "as-needed"
        ],
        "quotes": [
            "warn",
            "single",
            {
                "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "warn",
            "never"
        ],
        "space-before-blocks": [
            "error"
        ],
        "space-in-parens": [
            "error"
        ],
        "spaced-comment": [
            "error"
        ],
        "template-curly-spacing": [
            "error",
            "never"
        ],
        "vars-on-top": [
            "error"
        ],
        "yoda": [
            "error",
            "never",
            {
                "onlyEquality": true
            }
        ]
    }
}
