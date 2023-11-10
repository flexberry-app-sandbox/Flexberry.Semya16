import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-semya16-темпа-устан', 'Unit | Serializer | i-i-s-semya16-темпа-устан', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-semya16-темпа-устан',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-semya16-состояние',

    'model:i-i-s-semya16-датчик',
    'model:i-i-s-semya16-контроллер',
    'model:i-i-s-semya16-реле',
    'model:i-i-s-semya16-темпа-устан',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
