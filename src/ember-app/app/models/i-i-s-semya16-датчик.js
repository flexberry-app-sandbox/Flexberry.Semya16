import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДатчикMixin
} from '../mixins/regenerated/models/i-i-s-semya16-датчик';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДатчикMixin, Validations, {
});

defineProjections(Model);

export default Model;
