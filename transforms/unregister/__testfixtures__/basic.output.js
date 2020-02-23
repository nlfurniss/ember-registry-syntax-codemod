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
