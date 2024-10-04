import { executeSlashCommandsWithOptions } from "@sillytavern/slash-commands";


export function setvar(key: string, value: string, scope_local=true, parserOptions={}) {
    return executeSlashCommandsWithOptions(
        `/set${ scope_local ? '' : 'global' }var key="${key}" ${value}`,
        parserOptions,
    );
}

export function getvar(key: string, index: string, scope_local=true, parserOptions={}) {
    return executeSlashCommandsWithOptions(
        `/get${ scope_local ? '' : 'global' }var key="${key}"`,
        parserOptions,
    );
}
