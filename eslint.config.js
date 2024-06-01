// @ts-check
import typescript from "typescript-eslint";

import withNuxt from "./.nuxt/eslint.config.mjs";

const COMPLEXITY = 10;
const MAX_NESTED_CALLBACKS = 5;

export default withNuxt({
  linterOptions: {
    noInlineConfig: true,
  },
})
  .override("nuxt/javascript", {
    rules: {
      "array-callback-return": "error",
      "no-await-in-loop": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "require-atomic-updates": "error",
      "accessor-pairs": "error",
      "arrow-body-style": "error",
      complexity: ["error", COMPLEXITY],
      "consistent-return": "error",
      curly: "error",
      "default-case-last": "error",
      eqeqeq: "error",
      "func-style": ["error", "declaration"],
      "grouped-accessor-pairs": "error",
      "logical-assignment-operators": "error",
      "max-depth": "error",
      "max-nested-callbacks": ["error", MAX_NESTED_CALLBACKS],
      "no-alert": "error",
      "new-cap": "error",
      "no-array-constructor": "error",
      "no-console": "error",
      "no-else-return": "error",
      "no-empty-function": "error",
      "no-eval": "error",
      "no-extra-bind": "error",
      "no-extend-native": "error",
      "no-extra-boolean-cast": "error",
      "no-global-assign": "error",
      "no-implicit-coercion": ["error", { allow: ["~"] }],
      "no-implied-eval": "error",
      "no-invalid-this": "error",
      "no-lonely-if": "error",
      "no-lone-blocks": "error",
      "no-magic-numbers": "error",
      "no-multi-assign": "error",
      "no-multi-str": "error",
      "no-negated-condition": "error",
      "no-new": "error",
      "no-nested-ternary": "error",
      "no-new-wrappers": "error",
      "no-object-constructor": "error",
      "no-param-reassign": "error",
      "no-return-assign": "error",
      "no-script-url": "error",
      "no-throw-literal": "error",
      "no-undef-init": "error",
      "no-unneeded-ternary": "error",
      "no-useless-call": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "object-shorthand": "error",
      "operator-assignment": "error",
      "prefer-arrow-callback": "error",
      "prefer-exponentiation-operator": "error",
      "prefer-numeric-literals": "error",
      "prefer-named-capture-group": "error",
      "prefer-object-has-own": "error",
      "prefer-object-spread": "error",
      "prefer-template": "error",
      radix: "error",
    },
  })
  .override("nuxt/typescript/setup", {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  })
  .override("nuxt/typescript/rules", {
    rules: {
      ...typescriptRecommendRules(),
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "default-param-last": "off",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "no-loop-func": "off",
      "@typescript-eslint/no-loop-func": "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "error",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "error",
      "prefer-destructuring": "off",
      "@typescript-eslint/prefer-destructuring": "error",
      "@typescript-eslint/prefer-find": "error",
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/return-await": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/sort-type-constituents": "error",
    },
  })
  .override("nuxt/vue/rules", {
    rules: {
      "vue/require-default-prop": "off",
    },
  });

function typescriptRecommendRules() {
  return [...typescript.configs.strictTypeChecked, ...typescript.configs.stylisticTypeChecked]
    .map((config) => config.rules)
    .reduce((acc, rules) => ({ ...acc, ...rules }), {});
}
