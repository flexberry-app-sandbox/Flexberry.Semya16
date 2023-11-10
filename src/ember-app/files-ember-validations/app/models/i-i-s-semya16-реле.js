import {
  defineNamespace,
  defineProjections,
  Model as РелеMixin
} from '../mixins/regenerated/models/i-i-s-semya16-реле';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РелеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
