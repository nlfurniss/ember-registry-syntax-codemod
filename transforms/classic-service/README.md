# classic-service

## Usage

```
npx ember-registry-syntax-codemodz classic-service path/of/files/ or/some**/*glob.js

# or

yarn global add ember-registry-syntax-codemodz
ember-registry-syntax-codemodz classic-service path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->

- [basic](#basic)
<!--FIXTURES_TOC_END-->

## <!--FIXTURES_CONTENT_START-->

<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/classic-service/__testfixtures__/basic.input.js)</small>):

```js
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  store: service('store'),
  trackingService: service('tracking-addon@tracking'),
});
```

**Output** (<small>[basic.output.js](transforms/classic-service/__testfixtures__/basic.output.js)</small>):

```js
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  store: service({
    name: 'store',
  }),
  trackingService: service({
    namespace: 'tracking-addon',
    name: 'tracking',
  }),
});
```

<!--FIXTURES_CONTENT_END-->
