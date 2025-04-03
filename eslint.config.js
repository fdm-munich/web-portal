import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', "src/components/ui"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "keyword-spacing": ["error", {
        "after": true,
        "before": true
      }],
      "space-in-parens": ["error", "always"],
      "array-bracket-spacing": ["error", "always"],
      "no-process-env": "off",
      "linebreak-style": ["error", "unix"],
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "key-spacing": [
        2,
        {
          "singleLine": {
            "beforeColon": false,
            "afterColon": true
          },
          "multiLine": {
            "beforeColon": true,
            "afterColon": true,
            "align": "colon"
          }
        }
      ],
    },
  },
)
