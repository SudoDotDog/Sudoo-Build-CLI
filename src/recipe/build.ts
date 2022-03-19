/**
 * @author WMXPY
 * @namespace Recipe
 * @description Build
 */

import { ExecuteOption, ProjectType } from "../declare";
import { logInfo } from "../util/log";
import { buildTSConfigPath, buildTSReactConfigPath, tscCommandPath } from "../util/path";
import { spawnCommand } from "../util/spawn";

const getConfigPath = (type: ProjectType): string => {

    switch (type) {
        case 'typescript':
            return buildTSConfigPath;
        case 'typescript-react':
            return buildTSReactConfigPath;
        case 'typescript-react-native':
            return buildTSReactConfigPath;
        default:
            return buildTSConfigPath;
    }
};
export const buildRecipe = async (option: ExecuteOption): Promise<void> => {

    logInfo("Starting Build");

    // eslint-disable-next-line no-useless-catch
    try {
        await spawnCommand(tscCommandPath, [
            '--p',
            getConfigPath(option.type),
        ]);
    } catch (reason) {
        throw reason;
    }
};
