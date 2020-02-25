const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');
const { getAndSplitArg } = require('../helpers/get-and-split-arg');
const { createObjectExpression } = require('../helpers/create-object-expression');
const { hasNameArgOnly } = require('../helpers/has-name-arg-only');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const options = Object.assign({}, { quote: 'single' }, getOptions());

  const root = j(file.source);
  root
    .find(j.CallExpression, {
      callee: {
        name: 'service',
      },
    })
    .replaceWith(({ node }) => {
      const { arguments: nodeArgs } = node;
      if (!nodeArgs || !nodeArgs[0].value) {
        return node;
      }

      const args = getAndSplitArg(nodeArgs[0]);

      // If the arg just has the name of the service, we want to leave it as-is
      // See: https://github.com/emberjs/rfcs/blame/master/text/0585-improved-ember-registry-apis.md#L297
      if (!hasNameArgOnly(args)) {
        const newValue = createObjectExpression(j, args);
        node.arguments = [newValue];
      }

      return node;
    });

  return root.toSource(options);
};
