/**
 * @author WMXPY
 * @namespace Recipe
 * @description Storybook
 */

import { ExecuteOption } from "../declare";
import { logInfo } from "../util/log";
import { buildStorybookPath, startStorybookPath } from "../util/path";
import { spawnCommand } from "../util/spawn";

const DEFAULT_STORYBOOK_DEV_PORT = 9009;

export const storybookDevelopmentRecipe = async (option: ExecuteOption): Promise<void> => {

    logInfo("Starting Storybook Development");

    // eslint-disable-next-line no-useless-catch
    try {
        await spawnCommand(startStorybookPath, [
            '-p',
            String(typeof option.port === 'number'
                ? option.port
                : DEFAULT_STORYBOOK_DEV_PORT),
        ]);
    } catch (reason) {
        throw reason;
    }
};

export const buildStorybookRecipe = async (_option: ExecuteOption): Promise<void> => {

    logInfo("Building Storybook");

    // eslint-disable-next-line no-useless-catch
    try {
        await spawnCommand(buildStorybookPath, []);
    } catch (reason) {
        throw reason;
    }
};
