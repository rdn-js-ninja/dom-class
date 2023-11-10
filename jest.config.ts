import { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
    transform: {
        "^.+\\.ts$": [
            "ts-jest",
            {
                tsconfig: "./tsconfig.test.json",
            },
        ],
    },
    moduleFileExtensions: ["ts", "js"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,ts}", "!**/node_modules/**"],
    errorOnDeprecated: true,
    extensionsToTreatAsEsm: [".ts"],
    testEnvironment: "jsdom",
};

export default config;
