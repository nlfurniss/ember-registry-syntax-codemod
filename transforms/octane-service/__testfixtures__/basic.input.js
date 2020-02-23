import { inject as service } from '@ember/service';

export default class OnsiteToggles extends CommonOnsiteTogglesModule {
  @service('global-services@a11y-notification')
  a11yNotification;

  @service('i18n')
  i18n;

  @tracked firstName;
  @tracked lastName;
}
