# lookup


## Usage

```
npx ember-registry-syntax-codemodz lookup path/of/files/ or/some**/*glob.js

# or

yarn global add ember-registry-syntax-codemodz
ember-registry-syntax-codemodz lookup path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/lookup/__testfixtures__/basic.input.js)</small>):
```js
import { getOwner } from '@ember/application';
import EmberRouter from '@ember/routing/router';

export default class Router extends EmberRouter.extend() {
  getService() {
    return getOwner(this).lookup('service:main-nav');
  }

  getNamespacedService() {
    return getOwner(this).lookup('service:my-addon@cookies');
  }
}

```

**Output** (<small>[basic.output.js](transforms/lookup/__testfixtures__/basic.output.js)</small>):
```js
import { getOwner } from '@ember/application';
import EmberRouter from '@ember/routing/router';

export default class Router extends EmberRouter.extend() {
  getService() {
    return getOwner(this).lookup({
      type: 'service',
      name: 'main-nav'
    });
  }

  getNamespacedService() {
    return getOwner(this).lookup({
      type: 'service',
      namespace: 'my-addon',
      name: 'cookies'
    });
  }
}

```
<!--FIXTURES_CONTENT_END-->