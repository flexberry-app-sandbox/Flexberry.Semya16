import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Semya16',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Semya16',
          title: 'Semya16'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-semya16-контроллер-l': IISSemya16КонтроллерLForm,
    'i-i-s-semya16-темпа-устан-l': IISSemya16ТемпаУстанLForm,
    'i-i-s-semya16-контроллер-e': IISSemya16КонтроллерEForm,
    'i-i-s-semya16-темпа-устан-e': IISSemya16ТемпаУстанEForm
  },

});

export default translations;
