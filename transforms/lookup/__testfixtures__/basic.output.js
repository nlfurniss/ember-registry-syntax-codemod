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
