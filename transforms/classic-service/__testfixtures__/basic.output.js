import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  store: service({
    name: 'store'
  }),
  trackingService: service({
    namespace: 'tracking-addon',
    name: 'tracking'
  }),
});
