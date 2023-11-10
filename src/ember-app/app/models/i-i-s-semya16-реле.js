import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РелеMixin
} from '../mixins/regenerated/models/i-i-s-semya16-реле';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РелеMixin, Validations, {
});

defineProjections(Model);

export default Model;
