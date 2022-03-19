/**
 * @author WMXPY
 * @namespace Recipe
 * @description License
 */

import { licensePackage } from "@sudoo/license";
import { ExecuteOption } from "../declare";
import { logInfo } from "../util/log";
import { targetAppPath } from "../util/path";
import { cleanRecipe } from "./clean";

export const licenseRecipe = async (option: ExecuteOption): Promise<void> => {

    if (!option.only) {
        await cleanRecipe(option);
    }

    logInfo("Running License");

    // eslint-disable-next-line no-useless-catch
    try {
        await licensePackage({

            targetPath: targetAppPath,

            main: 'index.js',

            dependencies: false,
            peerDependencies: false,
            optionalDependencies: false,
        });
    } catch (reason) {
        throw reason;
    }
};
