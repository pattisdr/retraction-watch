
import { htmlSafe } from 'retraction-watch/helpers/html-safe';
import { module, test } from 'qunit';

module('Unit | Helper | html safe');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = htmlSafe(['<h1> Hello! </h1>']);
  assert.equals(result, 'Hello!');
});

