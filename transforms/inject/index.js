const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');
const { createObjectExpression } = require('../helpers/create-object-expression');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const options = Object.assign({}, { quote: 'single' }, getOptions());

  const root = j(file.source);
  root
    .find(j.CallExpression, {
      callee: {
        object: {
          property: {
            name: 'owner',
          },
        },
        property: {
          name: 'inject',
        },
      },
    })
    .replaceWith(({ node }) => {
      const { arguments: nodeArgs } = node;
      if (!nodeArgs || !nodeArgs[0].value) {
        return node;
      }

      const firstArgs = getAndSplitArgForInject(nodeArgs[0]);
      const newFirstValue = createObjectExpression(j, firstArgs);

      const secondArgs = getAndSplitArgForInject(nodeArgs[2]);
      const newSecondValue = createObjectExpression(j, secondArgs);

      node.arguments = [newFirstValue, nodeArgs[1], newSecondValue];

      return node;
    });

  return root.toSource(options);
};

function getAndSplitArgForInject(arg) {
  let [type, name] = arg.value.split(':');
  return { type, name };
}
