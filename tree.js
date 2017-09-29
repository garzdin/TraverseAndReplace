//
const findAndReplace = (tree, replaceMap) => {
  const result = Object.assign({}, tree);
  const mapKeys = Object.keys(replaceMap);

  const traverse = (node) => {
    each(node, (val, key) => {
      if (mapKeys.indexOf(key) !== -1) {
        node[replaceMap[key]] = node[key]; // eslint-disable-line

        delete node[key]; // eslint-disable-line
      }
      if (mapKeys.indexOf(val) !== -1) {
        node[key] = replaceMap[val]; // eslint-disable-line
      }
      if (isArray(val)) {
        val.forEach((el) => {
          if (isObject(el)) {
            traverse(el);
          }
        });
      }
      if (isObject(val)) {
        traverse(val);
      }
    });

    return result;
  };

  return traverse(result);
};
