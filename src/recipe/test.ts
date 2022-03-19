/**
 * @author WMXPY
 * @namespace Recipe
 * @description Test
 */

import { ExecuteOption, ProjectType } from "../declare";
import { logInfo } from "../util/log";
import { mochaCommandPath, mochaConfigPath, mochaConfigReactNativePath, mochaConfigReactPath, nycCommandPath } from "../util/path";
import { spawnCommand } from "../util/spawn";

const getConfigPath = (type: ProjectType): string => {

    switch (type) {
        case 'typescript':
            return mochaConfigPath;
        case 'typescript-react':
            return mochaConfigReactPath;
        case 'typescript-react-native':
            return mochaConfigReactNativePath;
        default:
            return mochaConfigPath;
    }
};

export const testRecipe = async (option: ExecuteOption): Promise<void> => {

    logInfo("Testing");

    // eslint-disable-next-line no-useless-catch
    try {
        await spawnCommand(mochaCommandPath, [
            '--config',
            getConfigPath(option.type),
        ]);
    } catch (reason) {
        throw reason;
    }
};

export const coverageRecipe = async (option: ExecuteOption): Promise<void> => {

    logInfo("Testing and Coverage");

    // eslint-disable-next-line no-useless-catch
    try {
        await spawnCommand(nycCommandPath, [
            mochaCommandPath,
            '--config',
            getConfigPath(option.type),
        ]);
    } catch (reason) {
        throw reason;
    }
};
