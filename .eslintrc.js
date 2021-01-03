module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:import/typescript',
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'react/jsx-wrap-multilines': 'off', // Turn off this rule because it can conflict with prettier
    'react/jsx-curly-newline': 'off', // Turn off this rule because it can conflict with prettier
    'import/no-cycle': 'off', // Turn off so 2 models can import each other
    'react/prop-types': 'off', // No need for prop-types when using typescript
    'lines-between-class-members': 'off', // Turn off unnecessary newlines inside state stores
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }], // Allow .tsx files to have JSX
    'max-classes-per-file': ['error', 2], // Allow two classes per file for state/store design
    'import/extensions': 'off', // Turn off to skip .tsx/.ts file extensions on imports
    'react/display-name': 'off', // Turn off to allow inline components in DataTable columns definition
    'no-console': 'off', // TODO: Temporarily allow console.log statements while we clean up context menus
    camelcase: 'off', // Turn off to allow Rails snake_case variables
  },
};
