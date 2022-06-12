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
        console.log('[COMPLETE] Finished');
        return;
    }

    let commandMatched: boolean = false;

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
                    commandMatched = true;
                    await buildRecipe(options);
                    break;
                }
                case 'clean': {
                    commandMatched = true;
                    await cleanRecipe(options);
                    break;
                }
                case 'install': {
                    commandMatched = true;
                    await installRecipe(options);
                    break;
                }
                case 'install-prod': {
                    commandMatched = true;
                    await installProdRecipe(options);
                    break;
                }
                case 'outdated': {
                    commandMatched = true;
                    await outdatedRecipe(options);
                    break;
                }
                case 'license': {
                    commandMatched = true;
                    await licenseRecipe(options);
                    break;
                }
                case 'lint': {
                    commandMatched = true;
                    await lintRecipe(options);
                    break;
                }
                case 'lint-fix': {
                    commandMatched = true;
                    await lintFixRecipe(options);
                    break;
                }
                case 'publish': {
                    commandMatched = true;
                    await publishRecipe(options);
                    break;
                }
                case 'publish-dry-run': {
                    commandMatched = true;
                    await publishDryRunRecipe(options);
                    break;
                }
                case 'storybook': {
                    commandMatched = true;
                    await storybookDevelopmentRecipe(options);
                    break;
                }
                case 'build-storybook': {
                    commandMatched = true;
                    await buildStorybookRecipe(options);
                    break;
                }
                case 'test': {
                    commandMatched = true;
                    await testRecipe(options);
                    break;
                }
                case 'coverage': {
                    commandMatched = true;
                    await coverageRecipe(options);
                    break;
                }
                default: {
                    throw new Error(`Unrecognized Command ${command}`);
                }
            }
        } catch (reason) {

            const ERROR_EXIT_CODE: number = 1;

            console.log(reason);
            console.log('[ERROR]');
            process.exit(ERROR_EXIT_CODE);
        }
    }

    if (!commandMatched) {
        console.log('[INFO] No recipe specified');
    }

    console.log('[COMPLETE] Finished');
};
