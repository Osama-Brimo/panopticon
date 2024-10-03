const extensionName = "Panopticon";

export async function _import(what: string | string[], where: string) {
  const result = {};

  try {
    if (Array.isArray(what)) {
      for (let i = 0; i < what.length; i++) {
        const moduleName = what[i];
        const module = await import(/* webpackIgnore: true */ where);
        result[moduleName] = module;
      }
    } else {
      const moduleName = what;
      const module = await import(/* webpackIgnore: true */ where);
      result[moduleName] = module;
    }
  } catch (error) {
    gameLog('_import problem:', error);
  } finally {
    return result;
  }
};

export function gameLog(label, ...args) {
  console.log(`[${extensionName}] ${label}`, ...args);
};
