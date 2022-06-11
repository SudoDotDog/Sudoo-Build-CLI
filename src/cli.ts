/**
 * @author WMXPY
 * @namespace BuildCLI
 * @description CLI
 */

import { ExecuteOption, ProjectType } from "./declare";
import { buildRecipe } from "./recipe/build";
import { cleanRecipe } from "./recipe/clean";
import { installProdRecipe, installRecipe, outdatedRecipe } from "./recipe/install";
import { licenseRecipe } from "./recipe/license";
import { lintFixRecipe, lintRecipe } from "./recipe/lint";
import { publishDryRunRecipe, publishRecipe } from "./recipe/publish";
import { buildStorybookRecipe, storybookDevelopmentRecipe } from "./recipe/storybook";
import { coverageRecipe, testRecipe } from "./recipe/test";
import { logInfo } from "./util/log";

export const execute = async (args: string[]): Promise<void> => {

    const options: ExecuteOption = {

        type: 'typescript',
        only: false,
        port: undefined,
    };

    const commands: string[] = args.slice(2);

    if (commands.length === 0) {

        console.log('[COMPLETE] No command specified');
        return;
    }

    for (let i = 0; i < commands.length; i++) {

        const command: string = commands[i];

        if (command.startsWith('-')) {

            switch (command) {

                case '--only': {

                    logInfo(`OPTION - Run target without dependencies`);
                    options.only = true;
                    break;
                }
                case '--type': {

                    logInfo(`OPTION - Type: "${commands[i + 1]}"`);

                    if (commands.length > i + 1) {
                        i++;
                        options.type = String(commands[i]) as ProjectType;
                    }
                    break;
                }
                case '--port': {

                    logInfo(`OPTION - Port: "${commands[i + 1]}"`);

                    if (commands.length > i + 1) {
                        i++;
                        options.port = Number(commands[i]);
                    }
                    break;
                }

            }
            continue;
        }

        try {

            switch (command) {
                case 'build': {
                    await buildRecipe(options);
                    break;
                }
                case 'clean': {
                    await cleanRecipe(options);
                    break;
                }
                case 'install': {
                    await installRecipe(options);
                    break;
                }
                case 'install-prod': {
                    await installProdRecipe(options);
                    break;
                }
                case 'outdated': {
                    await outdatedRecipe(options);
                    break;
                }
                case 'license': {
                    await licenseRecipe(options);
                    break;
                }
                case 'lint': {
                    await lintRecipe(options);
                    break;
                }
                case 'lint-fix': {
                    await lintFixRecipe(options);
                    break;
                }
                case 'publish': {
                    await publishRecipe(options);
                    break;
                }
                case 'publish-dry-run': {
                    await publishDryRunRecipe(options);
                    break;
                }
                case 'storybook': {
                    await storybookDevelopmentRecipe(options);
                    break;
                }
                case 'build-storybook': {
                    await buildStorybookRecipe(options);
                    break;
                }
                case 'test': {
                    await testRecipe(options);
                    break;
                }
                case 'coverage': {
                    await coverageRecipe(options);
                    break;
                }
                default: {
                    throw new Error(`Unrecognized Command ${command}`);
                }
            }
        } catch (reason) {

            console.log('[ERROR]');
        }
    }

    console.log('[COMPLETE] Finished');
};
