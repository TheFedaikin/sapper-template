import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => ({
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: './preprocess.js',
      },
    ],
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
})
