/**
 * @author WMXPY
 * @namespace Util
 * @description Log
 */

export const logInfo = (...args: string[]): void => {

    console.log([
        '[INFO]',
        ...args,
    ].join(' '));
};
