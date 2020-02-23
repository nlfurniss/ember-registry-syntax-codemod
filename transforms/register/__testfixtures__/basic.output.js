import EmberRouter from '@ember/routing/router';

export default class Router extends EmberRouter.extend() {
  registerService() {
    this.owner.register({
      type: 'service',
      name: 'main-nav'
    }, {
      someMethod: toStub(),
      anotherMethod() { return 1+1 }
    });
  }

  registerNamespacedService() {
    this.owner.register({
      type: 'service',
      namespace: 'my-addon',
      name: 'main-nav'
    }, class Clipboard {
      copyToClipboard(source) { source.toClipboard() }
    });
  }

  registerServiceWithReference() {
   this.owner.register({
     type: 'service',
     name: 'main-nav'
   }, EmberRouter);
  }

  registerNamespacedServiceWithReference() {
   this.owner.register({
     type: 'service',
     namespace: 'my-addon',
     name: 'main-nav'
   }, EmberRouter);
  }
}
