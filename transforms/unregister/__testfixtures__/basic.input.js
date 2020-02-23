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
