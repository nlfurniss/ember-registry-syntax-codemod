import { inject as service } from '@ember/service';

export default class OnsiteToggles extends CommonOnsiteTogglesModule {
  @service({
    namespace: 'global-services',
    name: 'a11y-notification'
  })
  a11yNotification;

  @service({
    name: 'i18n'
  })
  i18n;

  @tracked firstName;
  @tracked lastName;
}
