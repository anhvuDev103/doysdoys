```js
// Create project
yarn create vite

// Install packages
yarn add -D -E prettier
yarn add -D eslint-config-prettier eslint-plugin-prettier

// Configs
add ["prettier"] to `extends` in `.eslintrc.cjs` (last)
add ["prettier"] to `plugins` in `.eslintrc.cjs`

// add to `rules` in `.eslintrc.cjs`:
'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: true,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 80,
        jsxSingleQuote: true
      }
]

// add to `.prettierrc`
{
  "arrowParens": "always",
  "semi": true,
  "trailingComma": "none",
  "tabWidth": 2,
  "endOfLine": "auto",
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 80,
  "jsxSingleQuote": true
}

// add to `scripts` to `package.json`:
"lint": "eslint src/**/*.{ts,tsx} --report-unused-disable-directives --max-warnings 0",
"lint:fix": "eslint --fix src/**/*.{ts,tsx}",
"prettier": "prettier --check ./src",
"prettier:fix": "prettier --write ./src",

// Rules
// add to `rules` in `.eslintrc.cjs`:
'@typescript-eslint/no-explicit-any': 'warn',
'@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
],

// Config path
yarn add -D @types/node

// config vite configs:
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  }
});

// config into `compilerOptions` in `tsconfig.json`:
"baseUrl": "./src",
    "paths": {
      "@*": ["./*"]
}


// Config husky & lint-staged
yarn add -D lint-staged husky

// add `lint-staged` key to object of `package.json`:
"lint-staged":
{
    "src/**/*.{ts,tsx,css,scss}": "yarn prettier:fix",
    "src/**/*.{ts,tsx}": "yarn lint:fix"
}

run `npx husky-init`
add hooks into .husky/pre-commit

yarn add -D @commitlint/config-conventional @commitlint/cli
echo "export default {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
yarn husky add .husky/commit-msg 'npx --no -- commitlint --edit ${1}'

#note:
- bug commit-msg: "https://stackoverflow.com/questions/63244379/how-to-fix-syntaxerror-invalid-or-unexpected-token-when-trying-to-run-node-js"
```
