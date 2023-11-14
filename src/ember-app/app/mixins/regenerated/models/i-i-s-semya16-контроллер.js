import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  состояние: DS.attr('boolean'),
  темпаУстан: DS.belongsTo('i-i-s-semya16-темпа-устан', { inverse: null, async: false }),
  датчик: DS.hasMany('i-i-s-semya16-датчик', { inverse: 'контроллер', async: false }),
  реле: DS.hasMany('i-i-s-semya16-реле', { inverse: 'контроллер', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-semya16-контроллер.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-semya16-контроллер.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  темпаУстан: {
    descriptionKey: 'models.i-i-s-semya16-контроллер.validations.темпаУстан.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  датчик: {
    descriptionKey: 'models.i-i-s-semya16-контроллер.validations.датчик.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  реле: {
    descriptionKey: 'models.i-i-s-semya16-контроллер.validations.реле.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтроллерE', 'i-i-s-semya16-контроллер', {
    номер: attr('Номер', { index: 0 }),
    состояние: attr('Состояние', { index: 1 }),
    темпаУстан: belongsTo('i-i-s-semya16-темпа-устан', '', {
      температура: attr('', { index: 3 })
    }, { index: 2 }),
    датчик: hasMany('i-i-s-semya16-датчик', 'Датчик', {
      номерД: attr('Номер Д', { index: 0 }),
      погрешность: attr('Погрешность', { index: 1 }),
      производ: attr('Производ', { index: 2 })
    }),
    реле: hasMany('i-i-s-semya16-реле', 'Реле', {
      номерР: attr('Номер Р', { index: 0 }),
      состояниеР: attr('Состояние Р', { index: 1 })
    })
  });

  modelClass.defineProjection('КонтроллерL', 'i-i-s-semya16-контроллер', {
    номер: attr('Номер', { index: 0 }),
    состояние: attr('Состояние', { index: 1 }),
    темпаУстан: belongsTo('i-i-s-semya16-темпа-устан', '', {
      температура: attr('', { index: 3 })
    }, { index: 2 }),
    датчик: hasMany('i-i-s-semya16-датчик', '', {
      номерД: attr('', { index: 0 }),
      погрешность: attr('', { index: 1 }),
      производ: attr('', { index: 2 })
    }),
    реле: hasMany('i-i-s-semya16-реле', '', {
      номерР: attr('', { index: 0 }),
      состояниеР: attr('', { index: 1 })
    })
  });
};
