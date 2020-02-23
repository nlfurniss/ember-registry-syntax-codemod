# unregister


## Usage

```
npx ember-registry-syntax-codemodz unregister path/of/files/ or/some**/*glob.js

# or

yarn global add ember-registry-syntax-codemodz
ember-registry-syntax-codemodz unregister path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/unregister/__testfixtures__/basic.input.js)</small>):
```js
import EmberRouter from '@ember/routing/router';

export default class Router extends EmberRouter.extend() {
  unregisterService() {
    this.owner.unregister('service:asset-loader');
    this.owner.unregister('router:main');
  }

  unregisterNamespacedService() {
    this.owner.unregister('service:authentication@authenticated-user');
  }
}

```

**Output** (<small>[basic.output.js](transforms/unregister/__testfixtures__/basic.output.js)</small>):
```js
import EmberRouter from '@ember/routing/router';

export default class Router extends EmberRouter.extend() {
  unregisterService() {
    this.owner.unregister({
      type: 'service',
      name: 'asset-loader'
    });
    this.owner.unregister({
      type: 'router',
      name: 'main'
    });
  }

  unregisterNamespacedService() {
    this.owner.unregister({
      type: 'service',
      namespace: 'authentication',
      name: 'authenticated-user'
    });
  }
}

```
<!--FIXTURES_CONTENT_END-->