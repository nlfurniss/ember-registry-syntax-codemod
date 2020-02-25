import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  store: service('store'),

  trackingService: service({
    namespace: 'tracking-addon',
    name: 'tracking'
  }),
});
