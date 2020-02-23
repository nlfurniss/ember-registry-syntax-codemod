# octane-service


## Usage

```
npx ember-registry-syntax-codemodz octane-service path/of/files/ or/some**/*glob.js

# or

yarn global add ember-registry-syntax-codemodz
ember-registry-syntax-codemodz octane-service path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/octane-service/__testfixtures__/basic.input.js)</small>):
```js
import { inject as service } from '@ember/service';

export default class OnsiteToggles extends CommonOnsiteTogglesModule {
  @service('global-services@a11y-notification')
  a11yNotification;

  @service('i18n')
  i18n;

  @tracked firstName;
  @tracked lastName;
}

```

**Output** (<small>[basic.output.js](transforms/octane-service/__testfixtures__/basic.output.js)</small>):
```js
import { inject as service } from '@ember/service';

export default class OnsiteToggles extends CommonOnsiteTogglesModule {
  @service({
    namespace: 'global-services',
    name: 'a11y-notification'
  })
  a11yNotification;

  @service({
    name: 'i18n'
  })
  i18n;

  @tracked firstName;
  @tracked lastName;
}

```
<!--FIXTURES_CONTENT_END-->