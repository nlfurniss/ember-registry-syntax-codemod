# inject


## Usage

```
npx ember-registry-syntax-codemodz inject path/of/files/ or/some**/*glob.js

# or

yarn global add ember-registry-syntax-codemodz
ember-registry-syntax-codemodz inject path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/inject/__testfixtures__/basic.input.js)</small>):
```js
import { getOwner } from '@ember/application';
import EmberRouter from '@ember/routing/router';

export default class Router extends EmberRouter.extend() {
  injectService() {
    this.owner.inject('controller', 'session', 'service:session');
  }

  injectAnotherService() {
    this.owner.inject('route:application', 'email', 'model:email');
  }
}

```

**Output** (<small>[basic.output.js](transforms/inject/__testfixtures__/basic.output.js)</small>):
```js
import { getOwner } from '@ember/application';
import EmberRouter from '@ember/routing/router';

export default class Router extends EmberRouter.extend() {
  injectService() {
    this.owner.inject({
      type: 'controller'
    }, 'session', {
      type: 'service',
      name: 'session'
    });
  }

  injectAnotherService() {
    this.owner.inject({
      type: 'route',
      name: 'application'
    }, 'email', {
      type: 'model',
      name: 'email'
    });
  }
}

```
<!--FIXTURES_CONTENT_END-->