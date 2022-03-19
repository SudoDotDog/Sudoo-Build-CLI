/**
 * @author WMXPY
 * @namespace Util
 * @description Spawn
 */

import { spawn } from 'child_process';

export type SpawnResult = {
    readonly succeed: true;
} | {
    readonly succeed: false;
    readonly code: number;
};

export type SpawnOptions = {

    readonly cwd?: string;
};

export const spawnCommand = (command: string, args: string[], options?: SpawnOptions): Promise<SpawnResult> => {

    return new Promise((
        resolve: (result: SpawnResult) => void,
        reject: (result: SpawnResult) => void,
    ) => {

        const child = spawn(command, args, {
            stdio: "inherit",
            shell: true,
            ...options,
        });

        child.on('close', (code: number) => {

            if (code === 0) {

                resolve({
                    succeed: true,
                });
            } else {

                reject({
                    succeed: false,
                    code,
                });
            }
        });
    });
};
