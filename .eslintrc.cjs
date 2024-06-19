module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "airbnb",
        "airbnb/hooks",
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        "linebreak-style": "off",
        "indent": [
            "error",
            4
        ],
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "max-len": [
            "error",
            200
        ],
        "jsx-quotes": [
            "error",
            "prefer-single"
        ],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/no-unescaped-entities": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "no-unused-vars": "warn",
        "react/jsx-filename-extension": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/ban-ts-comment": "off",
    },
}
