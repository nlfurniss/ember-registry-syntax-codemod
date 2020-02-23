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
