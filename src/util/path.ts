/**
 * @author WMXPY
 * @namespace Util
 * @description Path
 */

import * as Path from "path";

export const currentPath: string = Path.resolve(process.cwd());

export const targetAppPath: string = Path.join(currentPath, 'app');

export const tscCommandPath: string = Path.join(currentPath, 'node_modules', '.bin', 'tsc');
export const startStorybookPath: string = Path.join(currentPath, 'node_modules', '.bin', 'start-storybook');
export const buildStorybookPath: string = Path.join(currentPath, 'node_modules', '.bin', 'build-storybook');
export const mochaCommandPath: string = Path.join(currentPath, 'node_modules', '.bin', 'mocha');
export const tsNodeCommandPath: string = Path.join(currentPath, 'node_modules', '.bin', 'ts-node');
export const eslintCommandPath: string = Path.join(currentPath, 'node_modules', '.bin', 'eslint');
export const nycCommandPath: string = Path.join(currentPath, 'node_modules', '.bin', 'nyc');

export const buildTSConfigPath: string = Path.join(currentPath, 'typescript', 'tsconfig.build.json');
export const devTSConfigPath: string = Path.join(currentPath, 'typescript', 'tsconfig.dev.json');

export const eslintConfigPath: string = Path.join(currentPath, 'typescript', '.eslintrc.json');

export const mochaConfigPath: string = Path.join(currentPath, 'node_modules', '@sudoo', 'mocha-config', '.mocharc.json');
export const mochaConfigReactPath: string = Path.join(currentPath, 'node_modules', '@sudoo', 'mocha-config-react', '.mocharc.json');
export const mochaConfigReactNativePath: string = Path.join(currentPath, 'node_modules', '@sudoo', 'mocha-config-react-native', '.mocharc.json');
