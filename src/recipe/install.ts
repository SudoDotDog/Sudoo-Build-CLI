/**
 * @author WMXPY
 * @namespace Recipe
 * @description Install
 */

import { ExecuteOption } from "../declare";
import { logInfo } from "../util/log";
import { spawnCommand } from "../util/spawn";

export const installRecipe = async (_option: ExecuteOption): Promise<void> => {

    logInfo("Installing Dependencies");

    // eslint-disable-next-line no-useless-catch
    try {
        await spawnCommand('yarn', [
            'install',
            '--production=false',
        ]);
    } catch (reason) {
        throw reason;
    }
};

export const installProdRecipe = async (_option: ExecuteOption): Promise<void> => {

    logInfo("Installing Production Dependencies");

    // eslint-disable-next-line no-useless-catch
    try {
        await spawnCommand('yarn', [
            'install',
            '--production=true',
        ]);
    } catch (reason) {
        throw reason;
    }
};

export const outdatedRecipe = async (option: ExecuteOption): Promise<void> => {

    if (!option.only) {
        await installRecipe(option);
    }

    logInfo("Checking Outdated Dependencies");

    // eslint-disable-next-line no-useless-catch
    try {
        await spawnCommand('yarn', [
            'outdated',
        ]);
    } catch (reason) {
        throw reason;
    }
};
