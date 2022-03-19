/**
 * @author WMXPY
 * @namespace Recipe
 * @description Publish
 */

import { ExecuteOption } from "../declare";
import { logInfo } from "../util/log";
import { targetAppPath } from "../util/path";
import { spawnCommand } from "../util/spawn";
import { buildRecipe } from "./build";
import { installRecipe } from "./install";
import { licenseRecipe } from "./license";
import { lintRecipe } from "./lint";
import { testRecipe } from "./test";

const getNpmCommand = (): string => {

    const isWindows: boolean = /^win/.test(process.platform);

    if (isWindows) {
        return 'npm.cmd';
    }
    return 'npm';
};

export const publishRecipe = async (option: ExecuteOption): Promise<void> => {

    if (!option.only) {
        await installRecipe(option);
        await testRecipe(option);
        await lintRecipe(option);
        await licenseRecipe(option);
        await buildRecipe(option);
    }

    logInfo("Publishing");

    // eslint-disable-next-line no-useless-catch
    try {
        await spawnCommand(getNpmCommand(), [
            'publish',
            '--access=public',
        ], {
            cwd: targetAppPath,
        });
    } catch (reason) {
        throw reason;
    }
};

export const publishDryRunRecipe = async (option: ExecuteOption): Promise<void> => {

    if (!option.only) {
        await installRecipe(option);
        await testRecipe(option);
        await lintRecipe(option);
        await licenseRecipe(option);
        await buildRecipe(option);
    }

    logInfo("Publishing - Dry Run");

    // eslint-disable-next-line no-useless-catch
    try {
        await spawnCommand(getNpmCommand(), [
            'publish',
            '--access=public',
            '--dry-run',
        ], {
            cwd: targetAppPath,
        });
    } catch (reason) {
        throw reason;
    }
};
