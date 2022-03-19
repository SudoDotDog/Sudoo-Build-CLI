/**
 * @author WMXPY
 * @namespace Recipe
 * @description Lint
 */

import { ExecuteOption } from "../declare";
import { logInfo } from "../util/log";
import { eslintCommandPath, eslintConfigPath } from "../util/path";
import { spawnCommand } from "../util/spawn";

export const lintRecipe = async (_option: ExecuteOption): Promise<void> => {

    logInfo("Linting");

    // eslint-disable-next-line no-useless-catch
    try {
        await spawnCommand(eslintCommandPath, [
            '.',
            '--ext',
            '.ts,.tsx',
            '--config',
            eslintConfigPath,
        ]);
    } catch (reason) {
        throw reason;
    }
};

export const lintFixRecipe = async (_option: ExecuteOption): Promise<void> => {

    logInfo("Linting and Fixing");

    // eslint-disable-next-line no-useless-catch
    try {
        await spawnCommand(eslintCommandPath, [
            '.',
            '--ext',
            '.ts,.tsx',
            '--config',
            eslintConfigPath,
            'fix',
        ]);
    } catch (reason) {
        throw reason;
    }
};
