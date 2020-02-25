/**
 * Helper that takes a node's argument and splits it into an object with `type`, `namespace`, and `name` keys.
 * ex: service('namespace@name) ==> [ 'namespace', 'name' ]
 * @param {Object} arg
 * @returns {Object}
 */
function getAndSplitArg(arg) {
  let [type, prelimName] = arg.value.split(':');

  if (prelimName === undefined) {
    prelimName = type;
    type = undefined;
  }

  let [namespace, name] = prelimName.split('@');

  if (name === undefined) {
    name = namespace;
    namespace = undefined;
  }

  return {
    type,
    namespace,
    name,
  };
}

module.exports = {
  getAndSplitArg,
};
