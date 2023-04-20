module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'standard-with-typescript',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: [
        'vue',
    ],
    rules: {
        indent: ['error', 4],
        '@typescript-eslint/indent': ['error', 4],
        quotes: [
            'error',
            'single',
        ],
        semi: [
            'error',
            'always',
        ],
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        }],
        'no-shadow': [
            'error',
            {
                builtinGlobals: false,
                hoist: 'functions',
                allow: ['state'],
            },
        ],
        'no-param-reassign': [
            'error',
            {
                props: false,
            },
        ],
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
            },
        ],
        eqeqeq: ['error', 'smart'],
        'consistent-return': [
            'error',
            {
                treatUndefinedAsUnspecified: false,
            },
        ],
        'import/no-extraneous-dependencies': ['off'],
        'import/no-unresolved': ['off'],
        'comma-dangle': ['error', 'always-multiline'],
        'max-len': ['off'],
        'space-before-function-paren': ['error', 'never'],
        camelcase: ['off'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-multiple-template-root': ['off'],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'always',
            },
        ],
        'vue/html-closing-bracket-spacing': [
            'error',
            {
                startTag: 'never',
                endTag: 'never',
                selfClosingTag: 'never',
            },
        ],
        'vue/use-v-on-exact': ['off'],
        'vue/v-slot-style': ['off'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['off'],
        'vue/order-in-components': [
            'error',
            {
                order: [
                    'el',
                    'name',
                    'key',
                    'parent',
                    'functional',
                    ['delimiters', 'comments'],
                    'middleware',
                    'layout',
                    ['components', 'directives', 'filters'],
                    'extends',
                    'mixins',
                    ['provide', 'inject'],
                    'ROUTER_GUARDS',
                    'validate',
                    'scrollToTop',
                    'transition',
                    'loading',
                    'inheritAttrs',
                    'model',
                    ['props', 'propsData'],
                    'emits',
                    'setup',
                    'data',
                    'head',
                    'computed',
                    'watch',
                    'watchQuery',
                    'fetch',
                    'asyncData',
                    'LIFECYCLE_HOOKS',
                    'methods',
                    ['template', 'render'],
                    'renderError',
                ],
            },
        ],
    },
};
