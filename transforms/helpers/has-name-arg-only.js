/**
 * Returns whether a string argument only contains a name.
 * ex: `service('store')`
 * @param {Object} args
 * @returns {Boolean}
 */
function hasNameArgOnly(args) {
  return args.name && !args.namespace && !args.type;
}

module.exports = {
  hasNameArgOnly,
};
