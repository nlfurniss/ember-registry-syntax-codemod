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
