import EmberRouter from '@ember/routing/router';

export default class Router extends EmberRouter.extend() {
  registerService() {
    this.owner.register('service:main-nav', {
      someMethod: toStub(),
      anotherMethod() { return 1+1 }
    });
  }

  registerNamespacedService() {
    this.owner.register('service:my-addon@main-nav', class Clipboard {
      copyToClipboard(source) { source.toClipboard() }
    });
  }

  registerServiceWithReference() {
   this.owner.register('service:main-nav', EmberRouter);
  }

  registerNamespacedServiceWithReference() {
   this.owner.register('service:my-addon@main-nav', EmberRouter);
  }
}
