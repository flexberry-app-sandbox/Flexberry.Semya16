import { Serializer as РелеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-semya16-реле';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РелеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
