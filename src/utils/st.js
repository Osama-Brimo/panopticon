import { delay } from '../../../../../utils.js';

export async function setvar(key, value, scope_local = true, parserOptions={}) {
    await delay(1);
    return executeSlashCommandsWithOptions(`/set${ scope_local ? '' : 'global' }var key="${key}" ${value}`, parserOptions); 
}