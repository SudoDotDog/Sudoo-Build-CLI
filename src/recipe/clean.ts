/**
 * @author WMXPY
 * @namespace Recipe
 * @description Clean
 */

import { buildUtilCleanPath } from "@sudoo/build-utils";
import { ExecuteOption } from "../declare";
import { logInfo } from "../util/log";
import { targetAppPath } from "../util/path";

export const cleanRecipe = async (_option: ExecuteOption): Promise<void> => {

    logInfo("Cleaning");

    // eslint-disable-next-line no-useless-catch
    try {
        await buildUtilCleanPath(targetAppPath);
    } catch (reason) {
        throw reason;
    }
};
