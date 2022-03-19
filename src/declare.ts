/**
 * @author WMXPY
 * @namespace BuildCLI
 * @description Declare
 */

export type ProjectType =
    | 'typescript'
    | 'typescript-react'
    | 'typescript-react-native';

export type ExecuteOption = {

    type: ProjectType;
    only: boolean;
    port?: number;
};
