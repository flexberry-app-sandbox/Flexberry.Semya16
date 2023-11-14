import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерР: DS.attr('number'),
  состояниеР: DS.attr('i-i-s-semya16-состояние'),
  контроллер: DS.belongsTo('i-i-s-semya16-контроллер', { inverse: 'реле', async: false })
});

export let ValidationRules = {
  номерР: {
    descriptionKey: 'models.i-i-s-semya16-реле.validations.номерР.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состояниеР: {
    descriptionKey: 'models.i-i-s-semya16-реле.validations.состояниеР.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контроллер: {
    descriptionKey: 'models.i-i-s-semya16-реле.validations.контроллер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РелеE', 'i-i-s-semya16-реле', {
    номерР: attr('Номер Р', { index: 0 }),
    состояниеР: attr('Состояние Р', { index: 1 })
  });

  modelClass.defineProjection('РелеL', 'i-i-s-semya16-реле', {
    номерР: attr('', { index: 0 }),
    состояниеР: attr('', { index: 1 })
  });
};
