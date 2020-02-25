const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');
const { getAndSplitArg } = require('../helpers/get-and-split-arg');
const { createObjectExpression } = require('../helpers/create-object-expression');
const { hasNameArgOnly } = require('../helpers/has-name-arg-only');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const options = Object.assign({}, { quote: 'single' }, getOptions());

  const root = j(file.source);
  // Could not get j.Decorator to actually find any decorators, so using a brute-force method until I can get it fixed.
  // root
  //   .find(j.Decorator, {
  //     expression: {
  //       callee: {
  //         name: 'service',
  //       },
  //     },
  //   })
  root
    .find(j.ClassProperty)
    .map(nodePath => {
      const { node } = nodePath;
      if (!node.decorators && node.decorators.length) {
        return null;
      }

      let serviceDecorator = null;
      node.decorators.forEach(decorator => {
        if (
          decorator.expression &&
          decorator.expression.callee &&
          decorator.expression.callee.name === 'service'
        ) {
          serviceDecorator = nodePath;
        }
      });
      return serviceDecorator;
    })
    .replaceWith(({ node }) => {
      const serviceDecorator = node.decorators[0];
      if (!serviceDecorator.expression.arguments[0].value) {
        return node;
      }

      const args = getAndSplitArg(serviceDecorator.expression.arguments[0]);

      // If the arg just has the name of the service, we want to leave it as-is
      // See: https://github.com/emberjs/rfcs/blame/master/text/0585-improved-ember-registry-apis.md#L297
      if (!hasNameArgOnly(args)) {
        const newValue = createObjectExpression(j, args);
        serviceDecorator.expression.arguments = [newValue];
      }

      return node;
    });

  return root.toSource(options);
};

module.exports.parser = 'flow'; // Needed to support decorators correctly (?)
