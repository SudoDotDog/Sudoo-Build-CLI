/**
 * @author WMXPY
 * @namespace Recipe
 * @description Build
 */

import { ExecuteOption } from "../declare";
import { logInfo } from "../util/log";
import { buildTSConfigPath, tscCommandPath } from "../util/path";
import { spawnCommand } from "../util/spawn";

export const buildRecipe = async (_option: ExecuteOption): Promise<void> => {

    logInfo("Starting Build");

    // eslint-disable-next-line no-useless-catch
    try {
        await spawnCommand(tscCommandPath, [
            '--p',
            buildTSConfigPath,
        ]);
    } catch (reason) {
        throw reason;
    }
};
