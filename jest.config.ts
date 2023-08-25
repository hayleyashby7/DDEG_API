import type { Config } from 'jest';

const config: Config = {
    clearMocks: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['./src/mocks/mockDB.ts'],
};

export default config;
