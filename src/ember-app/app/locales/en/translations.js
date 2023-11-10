import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSemya16КонтроллерLForm from './forms/i-i-s-semya16-контроллер-l';
import IISSemya16ТемпаУстанLForm from './forms/i-i-s-semya16-темпа-устан-l';
import IISSemya16КонтроллерEForm from './forms/i-i-s-semya16-контроллер-e';
import IISSemya16ТемпаУстанEForm from './forms/i-i-s-semya16-темпа-устан-e';
import IISSemya16ДатчикModel from './models/i-i-s-semya16-датчик';
import IISSemya16КонтроллерModel from './models/i-i-s-semya16-контроллер';
import IISSemya16РелеModel from './models/i-i-s-semya16-реле';
import IISSemya16ТемпаУстанModel from './models/i-i-s-semya16-темпа-устан';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-semya16-датчик': IISSemya16ДатчикModel,
    'i-i-s-semya16-контроллер': IISSemya16КонтроллерModel,
    'i-i-s-semya16-реле': IISSemya16РелеModel,
    'i-i-s-semya16-темпа-устан': IISSemya16ТемпаУстанModel
  },

  'application-name': 'Semya16',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Semya16',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Semya16',
          title: 'Semya16'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        semya16: {
          caption: 'Semya16',
          title: 'Semya16',
          'i-i-s-semya16-контроллер-l': {
            caption: 'Контроллер',
            title: ''
          },
          'i-i-s-semya16-темпа-устан-l': {
            caption: 'Темпа устан',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-semya16-контроллер-l': IISSemya16КонтроллерLForm,
    'i-i-s-semya16-темпа-устан-l': IISSemya16ТемпаУстанLForm,
    'i-i-s-semya16-контроллер-e': IISSemya16КонтроллерEForm,
    'i-i-s-semya16-темпа-устан-e': IISSemya16ТемпаУстанEForm
  },

});

export default translations;
