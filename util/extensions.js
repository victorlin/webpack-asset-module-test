const registry = (() => {
  if (!EXTENSION_DATA) {
    return {};
  }

  const extensions = typeof EXTENSION_DATA === "string" ?
    JSON.parse(EXTENSION_DATA) : EXTENSION_DATA;

  Object.keys(extensions).forEach((key) => {
    if (key.endsWith("Component")) {
      extensions[key] = require(`@extensions/${extensions[key]}`).default;
    }
  });

  return extensions;
})();


export const getExtension = (what) => {
  if (registry[what]) {
    return registry[what];
  }
  console.error("Requested non-existing extension", what);
  return false;
};

export const hasExtension = (what) => {
  return Object.keys(registry).includes(what);
};
