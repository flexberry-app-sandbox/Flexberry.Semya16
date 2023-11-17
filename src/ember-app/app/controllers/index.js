import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.semya16.caption'),
          title: i18n.t('forms.application.sitemap.semya16.title'),
          children: [{
            link: 'i-i-s-semya16-контроллер-l',
            caption: i18n.t('forms.application.sitemap.semya16.i-i-s-semya16-контроллер-l.caption'),
            title: i18n.t('forms.application.sitemap.semya16.i-i-s-semya16-контроллер-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-semya16-темпа-устан-l',
            caption: i18n.t('forms.application.sitemap.semya16.i-i-s-semya16-темпа-устан-l.caption'),
            title: i18n.t('forms.application.sitemap.semya16.i-i-s-semya16-темпа-устан-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})