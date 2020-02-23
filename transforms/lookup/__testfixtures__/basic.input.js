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
