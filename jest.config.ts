import { Config } from '@jest/types';

const config: Config.InitialOptions = {
    // All imported modules in your tests should be mocked automatically
    automock: true,

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    // An array of gLob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: [
        "src/**/*.{js,jsx}",
        "src/**/*.{ts,tsx}",
        "!vendor/**/*.{js,jsx}",
        "!**/node_modules/**",
    ],

    // Indicate which provider should be used to instrument code from coverage
    coverageProvider: "babel",

    // An object that configures minimum threshold enforcement for coverage results
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },

    maxConcurrency: 5,

    // A preset that is used as a base for Jest's configuration
    preset: "ts-jest",

    // The test environment that will be used for testing
    testEnvironment: "node",

    // Indicates whether each individual test should be reported during the run
    verbose: true,
};

export default config;
