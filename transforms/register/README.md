# register

## Usage

```
npx ember-registry-syntax-codemodz register path/of/files/ or/some**/*glob.js

# or

yarn global add ember-registry-syntax-codemodz
ember-registry-syntax-codemodz register path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->

- [basic](#basic)
<!--FIXTURES_TOC_END-->

## <!--FIXTURES_CONTENT_START-->

<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/register/__testfixtures__/basic.input.js)</small>):

```js
import EmberRouter from '@ember/routing/router';

export default class Router extends EmberRouter.extend() {
  registerService() {
    this.owner.register('service:main-nav', {
      someMethod: toStub(),
      anotherMethod() {
        return 1 + 1;
      },
    });
  }

  registerNamespacedService() {
    this.owner.register(
      'service:my-addon@main-nav',
      class Clipboard {
        copyToClipboard(source) {
          source.toClipboard();
        }
      }
    );
  }

  registerServiceWithReference() {
    this.owner.register('service:main-nav', EmberRouter);
  }

  registerNamespacedServiceWithReference() {
    this.owner.register('service:my-addon@main-nav', EmberRouter);
  }
}
```

**Output** (<small>[basic.output.js](transforms/register/__testfixtures__/basic.output.js)</small>):

```js
import EmberRouter from '@ember/routing/router';

export default class Router extends EmberRouter.extend() {
  registerService() {
    this.owner.register(
      {
        type: 'service',
        name: 'main-nav',
      },
      {
        someMethod: toStub(),
        anotherMethod() {
          return 1 + 1;
        },
      }
    );
  }

  registerNamespacedService() {
    this.owner.register(
      {
        type: 'service',
        namespace: 'my-addon',
        name: 'main-nav',
      },
      class Clipboard {
        copyToClipboard(source) {
          source.toClipboard();
        }
      }
    );
  }

  registerServiceWithReference() {
    this.owner.register(
      {
        type: 'service',
        name: 'main-nav',
      },
      EmberRouter
    );
  }

  registerNamespacedServiceWithReference() {
    this.owner.register(
      {
        type: 'service',
        namespace: 'my-addon',
        name: 'main-nav',
      },
      EmberRouter
    );
  }
}
```

<!--FIXTURES_CONTENT_END-->
