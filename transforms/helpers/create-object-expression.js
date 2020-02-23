/**
 * Returns an ObjectExpression with type, namespace, and name set.
 * @param {Object} j - jscodeshift lib reference
 * @param {Object} args
 */
function createObjectExpression(j, args) {
  let properties = [];

  Object.keys(args).forEach(key => {
    const value = args[key];
    if (value != undefined) {
      properties.push(j.property('init', j.identifier(key), j.literal(args[key])));
    }
  });

  return j.objectExpression(properties);
}

module.exports = {
  createObjectExpression,
};
