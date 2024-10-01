import { delay } from '../../../../../utils.js';
import { executeSlashCommandsWithOptions } from '../../../../../slash-commands.js';


export function setvar(key, value, scope_local=true, parserOptions={}) {
    return executeSlashCommandsWithOptions(
        `/set${ scope_local ? '' : 'global' }var key="${key}" ${value}`,
        parserOptions,
    ); 
}

export function getvar(key, index, scope_local=true, parserOptions={}) {
    return executeSlashCommandsWithOptions(
        `/get${ scope_local ? '' : 'global' }var key="${key}"`,
        parserOptions,
    ); 
}

