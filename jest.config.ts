export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    ".+\\.(git|svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^@app/(.*)$": "<rootDir>/$1",
    "\\.(css)$": "identity-obj-proxy",
  },globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Path to your tsconfig.json file
      diagnostics: {
        ignoreCodes: [151001], // Ignore TS151001 warning about import statements
      },
    },
  },
};
