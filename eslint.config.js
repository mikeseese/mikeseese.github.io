import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import prettierPluginRecommended from "eslint-plugin-prettier/recommended";
import preferArrowPlugin from "eslint-plugin-prefer-arrow";
import importPlugin from "eslint-plugin-import";

export default defineConfig(
  {
    ignores: ["node_modules", "generated", "build"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettierPluginRecommended,
    ],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
      sourceType: "module", // Allows for the use of imports
      globals: {
        ...globals.node,
      },
      parserOptions: {
        project: true, // TODO should we keep this?
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "prefer-arrow": preferArrowPlugin,
      import: importPlugin,
    },
    rules: {
      semi: ["error", "always"],
      indent: "off",
      "no-console": "error",
      "max-len": "off",
      "no-empty-function": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/no-empty-function": ["error"],
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-member-accessibility": ["warn"],
      "@typescript-eslint/explicit-function-return-type": ["warn"],
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  }
);
