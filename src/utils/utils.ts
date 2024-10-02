const extensionName = 'Panopticon';

export function gameLog (label, ...args) {
    console.log(`[${extensionName}] ${label}`, ...args);
}