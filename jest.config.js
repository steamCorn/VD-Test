module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: ['2307'],
      },
    },
  },
};
